commands: produce a WIREFRAME, not a designed page 0) purpose

Build a low-fidelity wireframe to communicate structure, hierarchy, and flow only.

Do not make visual design decisions. No branding, no stylistic polish, no micro-aesthetics.

1. canvas & grid

Artboard: Desktop 1440×(variable). Add one mobile breakpoint at 375×(variable), optional tablet at 768.

Grid: 12 columns, 80px side gutters, 24px column gaps. Max content width 1200px.

Spacing scale: multiples of 8px only (8/16/24/32/48/64).

Alignment: snap all elements to grid; no pixel-drifting.

2. color & styling (wireframe limits)

Palette: grayscale only — #000, #444, #777, #BBB, #EEE, #FFF.

No brand colors, gradients, shadows, blurs, images, or illustrations.

Strokes: 1px or 2px only. Corners: 4px radius max. No soft/large radii.

Background: #FFF. Section separators: 1px lines in #EEE.

3. typography (wireframe limits)

Use a single system font label: “Aa (System)” to indicate text blocks; do not pick a real font family.

Sizes (desktop): H1 24, H2 18, Body 14, Caption 12 (px). Weight cues: bold vs regular only.

No kerning, tracking, or line-height tweaks; use default line height. No color contrast tricks beyond palette above.

4. imagery & media (wireframe representation)

Replace every image/video with a light-gray rectangle (#EEE).

Add a diagonal X inside and a top-left label: [IMAGE], [VIDEO], [MAP], etc.

Do not crop, art-direct, or place real assets. No favicons or logos; use [LOGO] box (120×40) instead.

5. UI components (wireframe representation)

Buttons: outline rectangle, 2px stroke, label in ALL CAPS (e.g., [BUTTON: PRIMARY]). No fill colors.

Links: plain underlined gray text. No hover colors; annotate states (see §8).

Inputs: rectangle with label above; inside put [TEXT FIELD], [SELECT], [DATE]. Don’t render dropdown menus; use note “opens menu”.

Icons: small gray squares 16×16 labeled [ICON: NAME]. Do not choose real icons.

Cards/tiles: plain rectangles with a title line, two body lines, and an action line (no shadows, no images unless represented as [IMAGE]).

Badges/Chips: rounded rect with label [TAG]; outline only.

Tables: header row + 3 sample rows; columns sized to content; no zebra striping; use thin row dividers.

Modals/Drawers: solid white box with header and close [X] label; add backdrop block #000 @ 20% annotated as [SCRIM].

6. content rules

Use placeholders, not final copy.

Headlines: “Page Heading”, “Section Heading”.

Body: Lorem ipsum 2–3 lines per block; keep consistent line counts per type.

CTAs: “Do the Thing”, “Learn More”.

Numbers & prices: use generic placeholders (e.g., $0.00, 0 items). Do not imply pricing strategy.

Forms: include only fields, labels, and validation note placeholders [ERROR MESSAGE]; no explanatory microcopy.

7. layout & hierarchy

Clearly show information hierarchy by position/size only (see §3 sizes). No color-weighting beyond grayscale.

Each section gets a section header, a content area, and an action area (if any).

Above-the-fold shows the primary goal and its primary action; do not style it as a hero (no big imagery, no gradients).

Responsive: Provide one stacked mobile layout. Use single column with 16px side padding; order matches desktop reading order.

8. states & interactions (annotate, don’t design)

Represent states by annotations in square brackets, not by visual styling:

[HOVER], [FOCUS], [ACTIVE], [DISABLED], [ERROR], [EMPTY STATE], [LOADING], [SUCCESS].

For dynamic areas, place a dashed outline and label [DYNAMIC LIST], [PAGINATION], [FILTER PANEL].

For load/progress, draw a gray bar and label [PROGRESS] or [SKELETON]; no animation or color.

Link behavior: underline text and add a note [NAVIGATES TO: …]. Do not style visited/hover states.

9. annotations

Use numbered callouts ① ② ③ with short notes in the margin explaining intent, rules, and data requirements.

Examples:

① “Top nav collapses to hamburger at 768px; shows 6 items max; overflow in [MORE] menu.”

② “Product list paginates 20 items; sort + 3 filters; filter drawer pushes content.”

\*③ “Primary CTA triggers [MODAL: Create]; required fields marked with .”

Keep notes functional, not visual (“Shows price and rating” ✅ vs. “Uses green highlight” ❌).

10. navigation & IA

Header: [LOGO] [NAV ITEM]×N [SEARCH] [ACCOUNT] [CART]. No final labels; use placeholders.

Breadcrumbs: plain text Home / Section / Page.

Footer: three link columns labeled [COLUMN A/B/C] + legal block [COPYRIGHT]; no social icons (use [SOCIAL] labels if necessary).

11. accessibility cues (structure-only)

Indicate landmarks with labels: [HEADER] [NAV] [MAIN] [ASIDE] [FOOTER].

Mark reading order with small arrows if non-obvious.

Note focus order in annotations where relevant. Do not design visible focus rings; just label [FOCUS RING HERE].

12. what a fully fledged page would add (and what you must NOT do now)

Branding: real logo, brand colors, gradients, textures ❌

Typography: real font families, custom scale, letterspacing, leading tweaks ❌

Visual polish: shadows, depth, glassmorphism, blurs, rounded atmospheres, illustrations ❌

Imagery: real photos, art direction, cropping, masks ❌

Micro-interactions: hover animations, button states styled, transitions ❌

Content: final marketing copy, tone, voice, legal text ❌

Data viz: charts with real data, color palettes ❌

Iconography: specific icon sets, weights, sizes beyond generic boxes ❌

Component theming: densities, paddings deviating from 8px scale ❌

13. deliverables

One desktop wireframe and one mobile wireframe (PNG or PDF) + the editable source (Figma/Sketch/XD).

Naming: project-page_wireframe_desktop_v1, ...\_mobile_v1.

Include a page-level note: “Wireframe only — structure & flow; no visual design decisions.”

14. acceptance checklist (fail any item → revise)

Only grayscale used; no brand color or imagery.

All components represented by labeled primitives ([BUTTON], [IMAGE], [ICON], etc.).

Grid respected; spacing in 8px increments.

Clear hierarchy using size/position only.

All key states annotated, not styled.

Desktop + mobile variants provided.

Annotations explain function and content rules, not look & feel.

No real copy, no real assets, no micro-aesthetics.

quick translation map (for clarity)
Area Fully Fledged Page (what you might expect) Wireframe (what you must produce)
Colors Brand palette, gradients, contrast accents 6-step grayscale only
Type Chosen fonts, detailed scale, spacing tuned Generic labels, 4 sizes, default line-height
Images Real photos/illustrations, cropping Gray boxes with X and label
Buttons Filled styles, hover/active states Outlined rectangles, ALL CAPS label
Icons Specific icon set & weights 16×16 labeled squares [ICON: …]
Layout Polished rhythm, whitespace artistry Grid-aligned blocks, 8px scale
Interactions Animated, styled states Bracketed annotations only
Content Final copy, tone, legal Lorem ipsum + placeholder labels
Effects Shadows, blurs, glass, depth None

hand this to your colleague verbatim. if they follow it, you’ll get a clean, fast wireframe that locks down structure without drifting into design.
