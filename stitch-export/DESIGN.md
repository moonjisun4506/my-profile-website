---
name: Modern Minimalist Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#485767'
  on-tertiary: '#ffffff'
  tertiary-container: '#606f80'
  on-tertiary-container: '#e9f2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#d5e4f8'
  tertiary-fixed-dim: '#b9c8db'
  on-tertiary-fixed: '#0e1d2b'
  on-tertiary-fixed-variant: '#3a4858'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses quiet confidence, technical precision, and refined taste. Designed for high-impact personal portfolios and professional profiles, it balances editorial clarity with contemporary SaaS polish. 

The aesthetic is grounded in modern minimalism: pristine white canvases, generous architectural whitespace, crisp hair-thin structural divisions, and precise typography. Rather than relying on overt decoration, the interface commands attention through intentional composition, sharp micro-interactions, and vibrant royal blue accents that denote focus, action, and key achievements. The emotional response should be immediate trust, effortless readability, and an unmistakable sense of quality.

## Colors

The palette is engineered around high legibility, crisp contrast, and luminous accents:

- **Canvas & Surfaces:** Primary background is pure white (`#ffffff`). Secondary grouping containers, sidebars, and sub-panels use an ultra-light slate tint (`#f8fafc`).
- **Typography & Content:** Headlines, display items, and active states use rich dark charcoal slate (`#0f172a`). Body copy, descriptive metadata, and subtitles rely on mid-slate (`#334155` and `#64748b`).
- **Dividers & Outlines:** Structural dividers and card contours use subtle, precise slate borders: primary borders at `#e2e8f0` and hairline interior separators at `#f1f5f9`.
- **Accents & Interactions:** The signature dynamic accent is royal blue (`#2563eb`), darkening to `#1d4ed8` on interaction and hover. Soft blue washes (`#dbeafe` and `#eff6ff`) provide contextual highlights, active tags, and subtle glow backdrops.

## Typography

Inter serves as the unified typographic engine, configured with tight tracking on headings for an authoritative, crisp layout and open tracking on smaller metadata.

- **Scale Ratio:** Fluid typographic scaling maintains balance across responsive viewports. Mobile viewports compress high-impact headlines to preserve spatial breathing room.
- **Hierarchy Rules:** Display and headline levels rely on semibold and bold weights paired with negative letter spacing (`-0.02em` to `-0.03em`) to deliver modern editorial punch. Body copy maintains generous line heights (`1.5` to `1.6`) to maximize long-form scanability across case studies and bios.

## Layout & Spacing

The layout is built upon a 12-column responsive fluid grid wrapped within a max-width container of `1200px` to maintain optimal line lengths and structured alignment.

- **Breakpoints:**
  - **Mobile (< 768px):** 4-column layout with `1.25rem` outer margins and `1rem` column gutters. Cards stack vertically.
  - **Tablet (768px – 1024px):** 8-column layout with `2rem` margins and `1.5rem` gutters. Two-column project card layouts.
  - **Desktop (> 1024px):** 12-column layout with `3rem` margins and `2rem` gutters. Multi-column showcase cards, sticky navigation sidebars, and asymmetrical project metrics.
- **Rhythm:** Spacing follows an intentional 4px/8px modular cadence. Sections are separated by expansive vertical buffers (`4rem` to `6rem`) to ensure individual showcase entries stand out with clarity.

## Elevation & Depth

Visual hierarchy uses a hybrid strategy combining subtle structural outlines with soft, diffuse ambient shadows:

- **Hairline Boundaries:** Surface depth is anchored by fine 1px borders (`#e2e8f0` on active cards, `#f1f5f9` on secondary wells) rather than heavy drop shadows.
- **Diffuse Ambient Elevation:**
  - **Base Layer (Flat):** Pure `#ffffff` or `#f8fafc` with `border: 1px solid #e2e8f0`.
  - **Raised Card Layer:** `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 4px 12px -2px rgba(15, 23, 42, 0.05)`.
  - **Interactive Hover Layer:** On cursor hover, interactive project cards elevate seamlessly: `box-shadow: 0 12px 24px -6px rgba(37, 99, 235, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.04)`, shifting the border tone slightly toward `#cbd5e1`.
- **Soft Accent Glow:** Selected spotlight areas or primary focus controls utilize an ethereal blue radiance: `box-shadow: 0 0 0 4px #dbeafe`.

## Shapes

The design system adopts a refined, contemporary geometry centered on generous outer corners balanced by tailored inner elements:

- **Cards & Showcase Panels:** Standardized on `rounded-2xl` (`1rem` / `16px`), producing a gentle, approachable silhouette.
- **Buttons & Interactive Controls:** Sized with `rounded-xl` (`0.75rem` / `12px`) for confident touch and click targets.
- **Pills & Status Chips:** Pill-shaped (`9999px`) to create clear shape contrast against structural rectangular cards.
- **Avatars & Media:** Maintained at `rounded-2xl` or full circles (`rounded-full`) depending on asset context.

## Components

- **Buttons:**
  - *Primary:* Solid `#2563eb` fill with `#ffffff` text, `rounded-xl`, subtle transition to `#1d4ed8` on hover. Active press introduces a `0 0 0 4px #dbeafe` ring.
  - *Secondary / Outline:* Pure white fill, 1px `#e2e8f0` border, `#0f172a` text. On hover, background shifts to `#f8fafc` with border transitioning to `#cbd5e1`.
  - *Ghost:* Transparent surface with `#334155` text, shifting to `#f1f5f9` on hover.

- **Cards (Portfolio & Case Study Items):**
  - Base background in `#ffffff` framed by a 1px `#e2e8f0` perimeter and `rounded-2xl` geometry.
  - Padding calibrated to `1.5rem` on mobile, scaling to `2rem` on desktop viewports.
  - Hover states apply subtle upward translation (`transform: translateY(-2px)`) alongside the ambient blue-tinted shadow.

- **Chips & Tags:**
  - Compact `rounded-full` enclosures with `0.25rem 0.75rem` padding.
  - Default: `#f8fafc` background, 1px `#e2e8f0` border, `#334155` label text.
  - Active / Highlighted: `#eff6ff` fill, 1px `#bfdbfe` border, `#2563eb` text.

- **Input Fields & Textareas:**
  - `#ffffff` background with 1px `#e2e8f0` border and `rounded-xl` shape.
  - Placeholder text in `#94a3b8`; input value in `#0f172a`.
  - Focus state: Border transitions to `#2563eb` with an immediate outer glow of `0 0 0 3px #dbeafe`.

- **Lists & Timeline Entries:**
  - Experience and education items use a clean hairline vertical divider (`#e2e8f0`) with circular status nodes.
  - Row items incorporate `#f8fafc` hover backplates with soft 8px radius corners.

- **Checkboxes & Radios:**
  - Framed in 1px `#cbd5e1` with white interiors; when checked, filled with `#2563eb` displaying a white crisp checkmark or dot.

- **Featured Metric Badge:**
  - A specialized component displaying career highlights, stats, or availability indicators. Employs a luminous pulse animation (`#2563eb` center with a soft `#dbeafe` ping ring) paired with uppercase `label-sm` metadata.