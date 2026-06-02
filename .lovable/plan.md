## Goal
Shrink the team/contact image only on ~1280px-wide landscape laptops (xl breakpoint, 1280–1535px). Larger screens (2xl, 1536px+, including 1080p+) stay unchanged.

## Change
In `src/routes/index.tsx` (contact section, image wrapper line ~424):

- `xl:max-w-[320px]` → `xl:max-w-[220px]` (~31% smaller: 320 × 0.69 ≈ 220px)

## Resulting breakpoint ladder for the team image
- <1024px: 160px (unchanged)
- 1024–1279px (lg): 260px (unchanged)
- **1280–1535px (xl, your 1280×720 laptop): 220px** (was 320px)
- ≥1536px (2xl, 1080p+): unconstrained (unchanged)
