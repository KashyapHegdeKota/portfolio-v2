---
version: alpha
name: Kashyap Hegde Kota Portfolio
description: A signal-rich portfolio where technical evidence meets precise kinetic feedback.
colors:
  ink: "#0a0a0a"
  elevated-ink: "#111111"
  porcelain: "#f5f2ea"
  muted-stone: "#a6a299"
  hairline: "rgba(245, 242, 234, 0.12)"
  glass: "rgba(18, 18, 18, 0.68)"
  glass-strong: "rgba(26, 26, 26, 0.82)"
  signal-cyan: "#8be9fd"
  ignition-orange: "#ff6b35"
  circuit-violet: "#a78bfa"
  voltage-lime: "#c8ff5d"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "96px"
    fontWeight: 600
    lineHeight: 0.9
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 0.92
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  body-small:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
rounded:
  inset: "7px"
  engineered: "8px"
  full: "999px"
spacing:
  micro: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.engineered}"
    padding: "12px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.voltage-lime}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.porcelain}"
    typography: "{typography.body-small}"
    rounded: "{rounded.engineered}"
    padding: "12px 20px"
    height: "48px"
  chip:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.muted-stone}"
    typography: "{typography.label}"
    rounded: "{rounded.engineered}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.engineered}"
    padding: "20px"
  navigation:
    backgroundColor: "{colors.glass-strong}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.engineered}"
    padding: "12px 16px"
    height: "64px"
---

# Design System: Kashyap Hegde Kota Portfolio

## Overview

**Creative North Star: "The Signal Workshop"**

The portfolio is a confident, kinetic, technically fluent workshop where finished systems, build evidence, and professional signals share one precise interface. A near-black gridded field acts as the workbench; warm type, compact glass surfaces, and deliberately assigned accents make the work readable without disguising its technical character.

The system is expressive through scale, asymmetry, responsive feedback, and controlled contrast rather than decorative excess. It should feel authored and alive, but never resemble neon cyberpunk, a generic AI-generated portfolio, or a soft rounded SaaS product. The F1 lights-out loader is the signature interaction and receives the system's most theatrical motion; the rest of the interface stays quieter so that entrance remains distinctive. Motion elsewhere explains state, hierarchy, or spatial response rather than becoming ambient spectacle.

**Key Characteristics:**

- Near-black technical canvas with warm porcelain type.
- Oversized geometric headlines paired with restrained, readable body copy.
- Compact 8px geometry, fine borders, and selective glass layering.
- Multiple signal colors with explicit roles rather than blended decoration.
- A preserved F1 lights-out signature entrance with an automatic, session-aware fast path.
- Restrained kinetic feedback elsewhere that respects reduced-motion preferences.

## Colors

The palette places warm, high-contrast neutrals over a near-black field, then assigns four clean signal colors to state, categorization, and emphasis.

### Primary

- **Signal Cyan:** The default technical signal for section labels, links, active navigation glow, and cool interactive emphasis.

### Secondary

- **Ignition Orange:** A heat cue for experience, editorial quotation borders, and selected project accents.
- **Circuit Violet:** A categorical accent for project identity and occasional metadata emphasis.

### Tertiary

- **Voltage Lime:** The sharpest attention color, reserved for availability, featured states, selections, and primary-button hover.

### Neutral

- **Workshop Ink:** The foundational page field and the dark text color on light controls.
- **Elevated Ink:** The slightly raised solid surface used behind navigation, cards, and marquee chips.
- **Warm Porcelain:** Primary text and light-button fill; it softens the contrast relative to pure white.
- **Muted Stone:** Secondary copy and subdued metadata.
- **Hairline Porcelain:** The low-opacity border and divider system.
- **Workshop Glass / Workshop Glass Strong:** Translucent dark surfaces for structural grouping, with the stronger variant reserved for persistent overlays.

**The Signal, Not Spectrum Rule.** Use each accent as a discrete semantic signal; do not blend the palette into decorative gradients.

**The Earned Brightness Rule.** Voltage Lime is rare and purposeful. It marks availability, selection, or a decisive interaction—not general ornament.

## Typography

**Display Font:** Space Grotesk (with ui-sans-serif and system-ui fallbacks)  
**Body Font:** Inter (with ui-sans-serif and system-ui fallbacks)

**Character:** Space Grotesk gives headlines engineered mass and a contemporary technical voice. Inter keeps supporting information neutral, fast to scan, and credible at small sizes.

### Hierarchy

- **Display** (600, representative 96px, 0.9 line-height): Hero statements and route-defining editorial headlines; the implementation scales these fluidly with viewport-aware clamps.
- **Headline** (600, representative 48px, 0.92 line-height): Section introductions and large content statements.
- **Title** (600, 24px, 1.25 line-height): Project, article, and timeline titles.
- **Body** (400, 16px, 1.75 line-height): Explanatory copy with restrained width; long-form articles cap direct prose children at 760px and use a more relaxed 1.85 line-height.
- **Body Small** (400, 14px, 1.5 line-height): Card descriptions, navigation, contact details, and secondary actions.
- **Label** (600, 12px, 1 line-height, uppercase where used): Metrics, section eyebrows, dates, status, and compact technical metadata.

**The Compression Contrast Rule.** Large headlines run tightly; explanatory copy breathes. Do not give both layers the same vertical rhythm.

**The Two-Face Rule.** Use Space Grotesk for display and titles, Inter for interface and reading. Do not add a novelty mono or third display face without a functional need.

## Layout

The system uses a centered content rail capped at 1180px with fluid horizontal page padding from 1rem to 5rem. Sections carry generous vertical separation, while components use a compact 4/8/12/16/24/32px rhythm. This contrast lets large editorial statements coexist with dense technical evidence.

Desktop layouts favor explicit asymmetry: the hero divides approximately 1.08/0.92, contact uses 1/0.65, and the project collection becomes a six-column bento grid with varied spans. Mobile collapses these structures to a single readable flow, reduces page gutters, and retains full-width actions where helpful. Navigation switches from a centered desktop cluster to a contained mobile menu below 768px.

**The One Field Rule.** Sections live on the same continuous workshop canvas. Use containment to group meaningful units, not to turn every block of copy into another card.

**The Evidence Rhythm Rule.** Alternate expansive statements with compact proof clusters so visitors can scan quickly, then inspect deeply.

## Elevation & Depth

Depth is hybrid: structural glass layering and fine borders establish hierarchy at rest; lift, colored glow, and perspective arrive only through active state or high-value focus. The base canvas also uses a subtle 72px technical grid and a fixed noise layer, both quiet enough to recede behind content.

### Shadow Vocabulary

- **Structural Soft** (`0 24px 90px rgba(0, 0, 0, 0.55)`): Ambient separation for glass panels and code surfaces.
- **Signal Glow** (`0 0 70px rgba(139, 233, 253, 0.16)`): Cool emphasis for active timeline and technical focus states.
- **Navigation Lift** (`0 18px 70px rgba(0, 0, 0, 0.38)`): Persistent separation for the floating navigation shell.
- **Interactive Accent Glow** (`0 0 60px` at roughly 14–16% accent opacity): Project-card response tied to each project's assigned signal color.

**The Rest Is Structural Rule.** At rest, use tonal layering, blur, and hairline borders. Glow and lift signal interaction, focus, or active evidence.

**The No Gratuitous Glow Rule.** Never halo ordinary text, stack multiple glows, or use glow as a substitute for hierarchy.

## Shapes

The system is softly engineered rather than pill-soft. Cards, controls, chips, navigation, and image frames converge on an 8px corner; nested frames may tighten to 7px to preserve an even inset. Circles and full pills are exceptions for cursor states, dots, and compact directional controls—not a default component language.

Thin translucent borders describe boundaries. Rectilinear frames, clipped media, technical grid lines, and straight timeline rails provide the dominant geometry.

**The Eight-Pixel Chassis Rule.** Default to the 8px engineered corner across rectangular UI. Change the silhouette only when the component's function requires it.

## Components

Components are precise with kinetic feedback: compact at rest, legible immediately, and expressive only when the visitor interacts.

### Buttons

- **Shape:** Engineered rectangle with an 8px corner and 40–48px control height.
- **Primary:** Warm Porcelain fill, Workshop Ink text, semibold 14px label, and 12px × 20px padding for major calls to action.
- **Hover / Focus:** Primary fill changes to Voltage Lime. Magnetic movement and slight scale may support pointer feedback; keyboard focus must remain clearly visible.
- **Secondary:** Translucent dark fill with a Hairline Porcelain border; hover strengthens the relevant signal-colored border rather than flooding the surface.

### Chips

- **Style:** Compact 8px containers with hairline borders, translucent dark fills, and 11–12px labels. Uppercase is reserved for status, date, and category roles.
- **State:** Selected or featured chips may use a low-opacity Voltage Lime field with matching text; ordinary tags remain neutral.

### Cards / Containers

- **Corner Style:** Consistent 8px chassis with clipped media and fine borders.
- **Background:** Workshop Glass or Elevated Ink, depending on whether backdrop context should remain visible.
- **Shadow Strategy:** Structural Soft at rest; signal-colored border, glow, glare, or shallow 3D tilt may appear on hover.
- **Border:** Hairline Porcelain by default, increasing in opacity or changing to the assigned accent during interaction.
- **Internal Padding:** Usually 16–32px, with 20px the recurring project-card value.

### Navigation

- **Style:** A fixed 64px glass shell with 8px corners, compact padding, warm text, and a centered desktop item group.
- **State:** The active route receives a subtly filled 7px inset and low cyan glow. Other items change text or border color without decorative movement.
- **Mobile:** Replace the desktop cluster with a 40px menu control and a separate strong-glass menu aligned to the same maximum width.

### Project Cards

Project cards combine media, metric, title, description, tags, and source actions in a responsive proof system. Each card receives one assigned signal color. Prefer a simple image-scale or border response; card motion must remain subordinate to the F1 signature entrance and must not stack tilt, glare, glow, and zoom on the same interaction.

### F1 Signature Loader

The lights-out start sequence is a binding signature element of the portfolio. Preserve its five-light concept, F1-inspired gantry, dark technical material, and decisive lights-out transition.

- **Timing:** The complete sequence should make the portfolio usable within roughly 1.5–2.5 seconds.
- **Progression:** Transition into the homepage automatically; never require a launch button or other action to access the site.
- **Replay:** Show the full sequence only once per browsing session. Normal internal navigation must not replay it.
- **Skip:** Provide an obvious, keyboard-accessible skip control when the full sequence is shown.
- **Reduced Motion:** Bypass the sequence or collapse it to a near-immediate branded state when `prefers-reduced-motion: reduce` is active.
- **Sound:** Sound is optional and must remain silent unless the visitor explicitly initiates it. Never autoplay intrusive audio.

**The Signature Takes the Stage Rule.** Preserve the F1 loader through distill, quieter, polish, and subsequent refinement. Simplify competing motion elsewhere so the start sequence remains singular.

### Motion and Pointer Feedback

Outside the loader, motion should be brief and quiet: simple opacity-and-translate reveals, restrained route continuity, and direct state feedback. Magnetic movement, card response, marquee motion, cursor behavior, scrambles, and decorative loops must be reduced until no section competes with the signature entrance. All animation collapses under `prefers-reduced-motion: reduce`, and pointer-specific effects remain disabled for coarse pointers.

**The Motion Must Explain Rule.** Animation must reveal hierarchy, indicate state, preserve route continuity, or respond directly to input. If it does none of these, remove it.

## Do's and Don'ts

### Do:

- **Do** preserve the continuous near-black workshop canvas and use glass surfaces only for meaningful grouping.
- **Do** pair oversized Space Grotesk statements with restrained Inter explanations and technical metadata.
- **Do** assign accents semantically and let one signal color lead a component or interaction.
- **Do** reserve glow, lift, tilt, and scramble effects for direct feedback or high-value emphasis.
- **Do** maintain factual readability: project metrics, resume claims, and hiring signals must remain easy to scan.
- **Do** preserve reduced-motion and coarse-pointer fallbacks whenever adding interaction.
- **Do** preserve the F1 lights-out loader as the single signature interaction, complete it automatically within roughly 1.5–2.5 seconds, and show the full sequence only once per browsing session.
- **Do** keep loader sound silent unless the visitor explicitly initiates it.
- **Do** simplify motion elsewhere so the F1 entrance remains special.

### Don't:

- **Don't** drift into neon cyberpunk excess or cover the interface in luminous effects.
- **Don't** imitate generic AI-generated portfolio aesthetics through arbitrary gradients, floating blobs, or decorative pseudo-technical noise.
- **Don't** use soft rounded SaaS styling, pill-shaped UI everywhere, or inconsistent corner radii.
- **Don't** create card-on-card layouts when spacing and typography can establish the relationship.
- **Don't** use gradient-heavy decoration or blend all four signal colors into a single visual treatment.
- **Don't** animate without a functional purpose or stack multiple motion ideas on one interaction.
- **Don't** remove the F1 loader during distill, quieter, polish, or later refinement.
- **Don't** require a click before the portfolio becomes usable, replay the full loader during internal navigation, or autoplay sound.
