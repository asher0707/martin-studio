# Performance plan — faster image & page load

The site is slow mainly because of heavy image payloads and an artificial 3.5s intro loader. Total grid + project images = ~14 MB unoptimised.

## What's slow today
- `public/cards/` 30 JPEGs ≈ 6.8 MB total, served at full size
- `src/assets/proj-erb.jpg` 2.4 MB, `proj-visp.jpg` 2.6 MB, `proj-saas-fee.jpg` 498 KB, `proj-eggerberg.jpg` 395 KB
- `team.png` 908 KB (PNG photo)
- `hero.jpg` 170 KB (OK), `contact.jpg` 126 KB (OK)
- `Loader` component blocks visual start for a fixed 3.5 s even after the video ends
- No format negotiation — every device gets the same big JPEG/PNG

## Changes

### 1. Compress & convert all images to WebP
Run a one-time build script (libwebp via nix) to produce optimised WebPs:
- `public/cards/card*.jpeg` → `public/cards/card*.webp`, resized to max 800px on the long edge, quality ~75. Expected total ~1.2–1.6 MB (≈80% smaller).
- `src/assets/proj-*.jpg` → resized to max 1600px, quality ~78, saved as `.webp`. Expected each ≤250 KB.
- `src/assets/team.png` → `team.webp`, max 1280px, quality 80. Expected ~120 KB.
- `src/assets/hero.jpg`, `contact.jpg`, `architect-bg.jpg` → WebP variants for consistency.
- Keep originals on disk but stop importing them; update imports/paths to the `.webp` files.

### 2. Portfolio grid tuning (`src/routes/index.tsx`)
- Switch `<img src="/cards/cardN.jpeg">` → `/cards/cardN.webp`.
- Add `sizes="(min-width:1024px) 16vw, (min-width:768px) 25vw, (min-width:640px) 33vw, 50vw"` so the browser knows the real render width.
- Keep `loading="lazy"` + `decoding="async"` for cards 7–30; keep first 6 eager with `fetchpriority="high"`.
- Keep `content-visibility:auto` on off-screen tiles (already there).

### 3. Hero & other sections
- Use the new WebP hero; add `<link rel="preload" as="image" href="<hero>.webp" fetchpriority="high">` via the route `head()` so LCP starts immediately.
- Lazy-load `team.webp`, `contact.webp`, `architect-bg.webp` (already mostly lazy).

### 4. Intro loader
- Remove the fixed `setTimeout(3500)` floor. Hide as soon as the video fires `onEnded` / `onError`, with a safety fallback of 1500 ms instead of 3500 ms.
- Same change for the `Header` "ready" timer (drop from 3600 ms to ~1500 ms or tie it to the loader state).
- Net effect: content becomes interactive ~2 s earlier on first load.

### 5. Misc
- Add `decoding="async"` to project/team/contact images where missing.
- No code-architecture changes; no new dependencies.

## Expected impact
- Grid payload: ~6.8 MB → ~1.4 MB
- Project images bundle: ~5.9 MB → ~1 MB
- First meaningful paint: ~2 s faster (loader trim)
- LCP image arrives sooner via preload + WebP

## Technical notes
- WebP generation runs once via `nix run nixpkgs#libwebp -- cwebp ...` in a shell loop; output committed to the repo so production has no runtime conversion.
- No Vite plugin needed; existing static-import flow keeps working with `.webp` paths.
