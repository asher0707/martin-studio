## Plan: Redesign Contact Section

Implement the selected **Refined editorial** direction for the Contact section in `src/routes/index.tsx`. Self-contained — only the `Contact` and `Field` components change.

### Visual changes

- **Layout**: 12-col grid, `lg:col-span-5` for the visual + `lg:col-span-7` for the form, with `gap-24` on desktop. Max-width 6xl, centered, generous vertical padding (`py-32`).
- **Visual block** (left): rounded-[2rem] frame containing a large crimson circle (`oklch(0.55 0.22 25)`, blur 1px) behind the team photo. Photo uses `mix-blend-luminosity`, transitioning to normal blend on hover for a refined reveal.
- **Headline**: eyebrow "Contact Us" in JetBrains Mono, 11px, tracking 0.4em, in crimson. Headline "Begin the **conversation.**" — Inter light + DM Serif Display italic on "conversation."
- **Form**: minimalist underline inputs — transparent bg, `border-b border-white/20`, focus border crimson. Mono micro-labels (10px, tracking 0.2em, white/40) sitting above each field. Generous `space-y-12` rhythm. 2-column for Name/Email on md+, full-width for Subject and Message. Textarea reduced to 2 rows, resize-none.
- **Submit**: solid crimson rectangle, mono uppercase "Send message" + thin `ArrowUpRight`, hover brightness lift and subtle icon translate.
- **Footer**: thin top border, two-row on mobile / one-row on desktop, mono micro labels for © and the three cities (Geneva, Zurich, Milan as separate hover items).

### Technical details

- Inline Google Fonts (DM Serif Display, JetBrains Mono) are already loaded across the prototype; this implementation references them via `font-family` inline styles so no `styles.css` change is needed. Existing `font-display` token continues to drive the headline weight.
- Reuse existing `teamImg` import, `ArrowUpRight` from lucide, and the `Field` component (rewritten to render mono label + underline input).
- No changes to the `Home`, observer, or any other section. No new dependencies.

### Files

- `src/routes/index.tsx` — replace `Contact` and `Field` (lines ~395–435).
