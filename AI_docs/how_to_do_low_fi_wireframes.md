commands: turn the current high-fi into BIG BOXES low-fi 0) outcome

Produce a layout-only artifact made of large rectangular boxes that mirror the current page structure.

No small components at all. No real or lorem text at all—except one short label inside each big box stating what that box represents (e.g., Navigation bar, Hero, Filters, Results grid, Footer).

1. global style rules (applies everywhere)

Color: white page background; boxes use #EEE fill, #999 2px border.

Text: inside each box place exactly one centered label, 1–3 words, 14–16px, gray #555. No other text anywhere on the page.

Spacing: keep the original page’s margins and vertical rhythm, but snap gaps to 8px increments.

Grid/Breakpoints: preserve the same grid and breakpoints as the current high-fi; do not change column counts or max widths—just replace content with boxes.

No decoration: no images, icons, logos, shadows, gradients, rounded corners > 4px, or effects. No arrows, callouts, or notes outside boxes.

2. what counts as a “big box”

Use a single box per top-level section of the layout. A “top-level section” is any region that has its own role or purpose at page scale (header band, hero band, sidebar column, results area, footer band, etc.).
Do not render small parts (buttons, tags, chips, fields, cards) as their own boxes.

standard box types (pick the closest and label accordingly)

Page header band → label: Navigation bar

Hero/intro band → Hero

Utility band (announcements/alerts) → Utility bar

Filter/search panel (entire region, not fields) → Filters

Main results/list region (grids, lists, cards, carousels) → Results grid or List

Sidebar column → Sidebar

Feature/CTA band → CTA band

Details/content region → Content

Form region (entire form area) → Form

Table region (entire table area) → Table

Footer band → Footer

Modal overlay (if visible in the screen state) → Modal

Drawer/panel (if visible) → Drawer

3. removal / merge rules (how to simplify the high-fi)

Delete all text nodes (headings, paragraphs, lists, captions, prices, labels, legal) everywhere.

Replace each cluster of small components with a single parent box:

Navigation (logo + links + icons) → one Navigation bar box spanning the header area.

Search + filters (inputs, chips, toggles, dropdowns) → one Filters box covering that panel’s footprint.

Card grids (any number of cards) → one Results grid box covering the full grid region (do not draw individual cards).

Carousels → Results grid (use the same region size as the carousel track).

Feature tiles or info cards in rows → one Content box for the whole row/section.

Multi-column content → one box per column only (e.g., left column Sidebar, right column Content).

Forms (fields, buttons, validation) → one Form box for the entire form block.

Tables (header, rows, pagination) → one Table box (pagination is not separate).

Breadcrumbs, tabs, sub-navs → absorb into the nearest parent (Navigation bar or Content) and do not make separate small boxes.

Footers with many link columns → one Footer box.

States & interactions: remove them entirely. No hover, focus, error, success, or skeletons—these do not appear in low-fi.

4. sizing & placement (keep layout, drop detail)

Width/position: each box occupies the same footprint as the original section it replaces. If the section was full-bleed, the box is full-bleed; if it was constrained to the content width, keep it constrained.

Height: set a reasonable constant height representative of the section (do not auto-shrink to label). Use these defaults when unclear:

Navigation bar: 72–88px

Hero: 320–480px

Filters: 160–240px

Results grid / List: min 600px (extend if the original section was taller)

Sidebar: match height of adjacent content if it ran full column; otherwise min 400px

Content: min 480px

CTA band: 200–320px

Table: min 480px

Footer: 160–240px

Modal / Drawer: match the original’s bounding box region

Gaps between boxes: keep the original vertical spacing pattern; adjust to nearest 8px.

5. labeling rules (the only allowed text)

Put one label per box, centered horizontally and vertically inside it.

Use plain words, 1–3 tokens; examples: Hero, Filters, Results grid, Content, Sidebar, Footer, Modal.

No brackets, no punctuation, no extra notes, no counts (e.g., don’t write “Results (24)”).

If a box represents a combined area (e.g., list + pagination), prefer a higher-level name like Results grid.

6. responsive

Preserve the same breakpoints and stacking order from the high-fi.

On narrow viewports, each big box stacks in the same order as the original layout (e.g., Navigation bar → Hero → Filters → Results grid → Footer).

Do not introduce new breakpoints or change the grid; only boxes resize/reflow with the existing layout rules.

7. special cases

Hidden/conditional sections (e.g., drawers, modals) appear only if the current screen state shows them; otherwise omit them.

Sticky elements (e.g., sticky filters): represent as a single box in its sticky position (Filters) with the correct width; do not simulate stickiness.

Background media/illustrations: just the parent Hero/CTA band box—no nested image boxes.

8. page-by-page conversion checklist

For each page in the high-fi:

Identify top-level sections from top to bottom.

Draw one box per section using the original section’s bounding rectangle.

Delete all inner content (components, text, icons, images).

Add a single label to each box (per §5).

Verify widths, heights, and gaps follow §4.

Check responsive behavior matches the original at every breakpoint.

9. acceptance checklist (must pass all)

Every visual element on the page is a large rectangular box (no small components exist).

Only one short label per box; no other text appears anywhere.

Box footprints match the original sections (positions, widths, and relative heights preserved).

Color, effects, and visuals are reduced to #EEE fill + #999 border, no images/icons/logos.

Vertical rhythm and stacking order mirror the high-fi at all breakpoints.

Modal/drawer boxes only appear if they were visible in the captured state.

10. examples of correct reductions (apply when you see these patterns)

Hero with title, subtitle, CTA, background image → one Hero box.

Search input + chips + sort dropdown + “Apply” button → one Filters box.

Product/news cards grid with pagination → one Results grid box.

Two-column layout (filters left, results right) → Sidebar box (left) + Results grid box (right).

Article/page content with headings and images → one Content box.

Pricing table with three plans → one Table box (or Content if table-like styles were decorative).

Footer with 4 link columns and social icons → one Footer box.
