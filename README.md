# April Hill Portfolio

A recruiter-focused personal portfolio built with semantic HTML, CSS, and small progressive JavaScript enhancements.

## Direction

- Personal identity: April Hill
- Positioning: full-stack developer working from interface to infrastructure
- Visual style: editorial, architectural, grounded, accessible, and intentionally free of the former space theme
- Hosting target: Vercel through GitHub

## Brand token system

The token source is stored in `tokens/design-tokens.json`. CSS follows three layers:

1. Primitive identity tokens such as `--color-brand-slate`
2. Semantic tokens such as `--semantic-bg-default`
3. Component aliases such as `--color-button-primary-bg`

The interface uses white and restrained architectural neutrals for most of the page, Vivid Steel for interaction, and a small lavender family for personality.

| Token | Value | Purpose |
| --- | --- | --- |
| Graphite | `#1f2428` | Primary text, proof strip, footer, and strongest structure |
| Slate Grey | `#4a5568` | Logo name, secondary text, and supporting structure |
| White | `#ffffff` | Main canvas, hero, header, and cards |
| Lavender Neutral | `#f7f5f8` | Subtle alternate section background |
| Vivid Steel | `#256b91` | Primary buttons, links, active navigation, and focus states |
| Vivid Steel Hover | `#1e5776` | Hover states and accessible colored text |
| Light Border | `#d8dadd` | Borders and dividers |
| Digital Lavender | `#b497bd` | Borders, icons, rules, and decorative markers |
| Pale Lavender | `#eee7f2` | Profile frame, contact panel, and selected callout surfaces |
| Deep Lavender | `#6f5578` | Accessible non-interactive accent text |

### Active color roles

- White is the main page canvas, hero, sticky navigation, and card color.
- Lavender Neutral separates sections without introducing a green or cream cast.
- Pale Lavender frames the profile and supports selected callouts.
- Graphite and Slate Grey provide the typography hierarchy.
- Vivid Steel is the only primary interaction color, keeping calls to action consistent.
- Pale Lavender supports the contact panel and occasional callouts.
- Digital Lavender is limited to small decorative details and is not used for body copy or primary controls.
- Deep Lavender is available when an accessible, non-interactive accent is needed.

Accessibility notes are documented in the JSON source and CSS. White on Vivid Steel measures 5.85:1, White on its hover color measures 7.84:1, Graphite on White measures 15.66:1, and Deep Lavender on White measures 6.47:1.

## Logo system

- Primary: Slate Grey name with Vivid Steel stacks on light backgrounds
- Reversed: White name with Vivid Steel stacks on Graphite
- Monochrome: Slate Grey or Graphite for constrained reproduction
- Mark-only: the stack symbol for favicons, avatars, and compact spaces

Keep the professional specialty or tagline as live HTML text rather than baking it into the logo image.

## Pages

- `index.html` — recruiter-focused overview
- `work.html` — selected project index
- `about.html` — personalized professional narrative
- `launch-commander.html` — Launch Commander, DREAM Portal, and migration case study
- `cosmos-custom-shirts.html` — Django commerce and AWS deployment case study
- `echelon-timepieces.html` — Shopify, localization, and image-direction case study
- `rusted-luxe.html` — archived WordPress and WooCommerce case study
- `style-guide.html` — internal palette and component preview; excluded from search indexing

## Deployment target

- Production domain: `aprilhill.tech`
- Hosting: Vercel through GitHub
- Live demos remain on their existing providers until their new subdomains are configured and tested

## Pre-deployment checklist

- [x] Prepare one strong, optimized launch image for each flagship project: Launch Commander, Cosmos Custom Shirts, and Echelon Timepieces
- [x] Add purposeful screenshots and concise captions to each full case study
- [x] Create responsive architecture and migration diagrams for the Launch Commander story
- [x] Reuse and optimize the strongest existing Rusted Luxe case-study images rather than creating duplicate assets
- [x] Exclude Jaxons from the initial launch and prioritize stronger work
- [x] Export project images as optimized WebP assets with responsive dimensions
- [x] Add descriptive alt text and explicit image dimensions
- [x] Keep live-demo and case-study links beside project visuals
- [x] Add the Echelon visitor password beside every development-store entry point
- [x] Test the Echelon link and visitor password in a private browser window
- [ ] Confirm the protected demo contains no real customer, order, payment, or other sensitive information before publishing access instructions
- [x] Add canonical URLs, social metadata, structured data, favicon declarations, `robots.txt`, and `sitemap.xml`
- [x] Run desktop and narrow-screen layout checks, local-reference validation, contrast checks, syntax checks, and a repository secret scan
- [x] Add the stable professional contact email `april.hill.dev@gmail.com`
- [ ] Add the final, renamed resume PDF and a visible resume link
- [ ] Update GitHub and LinkedIn display identity and bios to April Hill
- [ ] Create the initial Git commit, connect the GitHub remote, and push `main`
- [ ] Import the repository into Vercel and verify the preview deployment
- [ ] Connect `aprilhill.tech` and `www.aprilhill.tech`, then test production HTTPS
- [ ] Move Cosmos to `cosmos.aprilhill.tech` after the portfolio launch and retain or redirect the old demo URL

## Post-launch enhancements

- [ ] Add business-card content and an accessible optional flip interaction
- [ ] Add a professional blog only after at least two substantive technical posts are ready
- [ ] Create a dedicated 1200 × 630 social-sharing image and a mark-only favicon
- [ ] Revisit the weather API behavior in Launch Commander
- [ ] Add future sports and Space Commander projects only when each has a demonstrable milestone

## Local preview

Open `index.html` directly or serve the directory with any static development server.
