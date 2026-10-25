---
name: website-vsl-standard
description: 'Use EVERY time any bot plans, designs, builds or audits a website or landing page for Jason or any client, to replicate the olaceo.com standard: ICP split at entry, frictionless value-first paths, minimal design, exact spacing/type/motion values, iOS-feel interactions and verification gates.'
---

# Website VSL Standard (the olaceo method)

v1.0.0, Oct 25 2026. Written from the olaceo.com reference code and its measurement logs, not memory. Every number below is either:
- **measured**: copied from the reference code or a verification log of the reference build, or
- marked **UNVERIFIED**: a target, an outside claim, or not yet measured. Do not quote these as facts to a client.

Files that ship with this standard (paths are relative to this file):
- [reference/tokens.css](reference/tokens.css): the real token block (light and dark), base type, grid, buttons, inputs, hero, pill and transitions.
- [reference/motion.js](reference/motion.js): the real spring, rubber band, velocity, flick projection and VSL no-skip code.
- [templates/client-intake.md](templates/client-intake.md): the fill-in intake form for Step 1.

## The philosophy in one screen (read this first)
1. **One visitor, one job, one next step.** Every person who lands has one objective. The site's job is to find out which person they are in one tap, then show only what moves that person forward. Friction is the enemy.
2. **Quiet front, working machinery underneath.** The surface is white space, one typeface, one accent and real photos or a real video. The intelligence (routing, no-skip player, tracking, CRM) is invisible.
3. **Receipts, not claims.** No invented stats, logos, testimonials, scarcity or countdowns. If proof does not exist, the slot stays hidden or the FAQ says "not yet, and we won't make any up". The build fails on banned claims.
4. **Everyone exits somewhere useful.** No dead ends, and no rejection language ("not a fit", "not qualified"). A visitor who isn't ready gets the free path.
5. **Motion is liquid, not glass.** Movement follows physics (springs, velocity, rubber band). It never decorates, and it always respects reduced motion. Think water merging with a puddle, not glass.
6. **Measured, not eyeballed.** Centering, layout shift, frame drops and fold positions get measured in px and ms before anyone calls them done.

Why it works (the psychological angle):
- **Self-selection at the door.** People trust a page that names them. "Which one are you?" makes the visitor do the segmenting, so every later word can speak to one person. It also costs one tap, not a form.
- **Value before ask.** The H1 states the outcome the ICP wants (time, money, the skill they lack), not the service. Two VSL-funnel practitioners put it this way: Haynes, "a clear and straightforward statement about what your offer is and who it's for"; Iles, "make it about the result, not the service".
- **Fewer choices, more action.** One primary CTA per page. Secondary paths are quiet text links, never a second button.
- **Calm = credible.** Restraint (white space, one accent, light-weight big type) reads as premium and confident. Clutter reads as needy. This is a design judgment from the reference build. UNVERIFIED as a measured conversion effect.
- **Commitment by watching.** The VSL can't be skipped forward, so the CTA meets someone who heard the whole argument. The end screen puts the CTA right there.

---

## Step 1. Intake: who enters, what they want, what stops them
Do this before any pixel. Fill [templates/client-intake.md](templates/client-intake.md) with the client.

For each ICP, write down:
- **Name in their words**, the way they'd describe themselves on a card. olaceo: "I own a business" / "I build with AI".
- **Objective**: the one outcome they came for. Owners buy outcomes ("save money, save time, make money"), not tools.
- **Main objection**: the reason they'd leave. Builder: "I can build but freeze on sales calls". Owner: "I don't know what AI could fix in my business".
- **Proof they need**: only real proof you actually have.
- **Next step**: the single action for that ICP (book a call, start a walkthrough, buy, download).
- **Price rule**: show or hide. olaceo's business funnel shows NO prices ("We diagnose before we quote"), enforced by the build.

Rules:
- 2 ICPs is the reference. More than 3 doors on a router dilutes the split. UNVERIFIED (judgment, not tested).
- If you can't write one sentence for an ICP's objective, you can't build their page yet. Stop and ask.

## Step 2. The entry split (router at "/")
What: the homepage is a router. One question and one big card per ICP. No hero copy wall, no nav menu.

Reference build (router page and its styles; live on olaceo.com since Oct 24 2026):
- H1 = the wordmark plus one line naming both audiences ("AI that pays, for business owners and the builders who sell it."). Screen readers get it as real text.
- Question: "which one are you?" (lowercase, quiet). Margin 56px 0 18px.
- Cards: 2 across, 340px each, 16px gap, 200px tall, radius 22px, border rgba(18,24,32,.09). Arrow disc 44px. Hover lifts -2px; active scales .985.
- Mobile: 1 column up to 420px wide, cards 108px tall.
- Each card is a plain `<a href>`. It works with no JS.
- Remembered choice: localStorage `ola_path`. A return visit reads "welcome back" and the last card gets a quiet "continue" chip.
- **Never auto-redirect.** Why: the logo on every page links to "/", so auto-routing would trap anyone who picked the wrong door.
- Direct links (ads, emails, PDFs) go straight to the ICP page and never touch the router.
- Members get a quiet text link under the cards ("Already a member? Sign in"): 13px, #6B7580, 44px tap target.
- Loader: pure CSS on the h1's own wordmark. It runs 1.78s, a same-session return gets 0.4s, and reduced motion gets one 0.4s fade. No extra requests, CLS 0.
- Exit: a cross-document View Transition, used only for router to path: out .3s, in .5s cubic-bezier(.22,1,.36,1).
- Footer: a quiet row of secondary links (free guide, booking, about, privacy, terms).
- JSON-LD: Organization, Person, WebSite, plus a WebPage with `hasPart` for each path.

Measured on the reference build: choices, wordmark and question centered within 0.02px; stack vertically centered at 0.000px; router test suite 39/39.

## Step 3. Per-ICP path: straight to the value
Every ICP page follows the same spine: headline, video, one action.

1. **Eyebrow**: who it's for, in plain words. "For business owners".
2. **H1**: the outcome. 12 words or fewer.
3. **Lede**: one line. How you deliver it.
4. **VSL**: big and centered (step 3a).
5. **One CTA** right under the video, visible from load, no delayed reveal. Fine print under it removes the fear: "Free. 30 minutes. No pitch deck."
6. **Proof directly under the hero**: honest only ("What we've shipped").
7. Then only what answers objections, in this order: problems (in their words), what you find or do, how it works (3 steps), offer ladder, FAQ (with a straight cost answer), and a full-bleed close CTA that repeats the one action.

Reference orders:
- `/business`: hero VSL, What we've shipped, Problems (4), What the audit finds (6, numbered), How it works (Walkthrough, Diagnostic, Build), Ladder, FAQ, close CTA (alt text link to the free site check).
- `/builders`: hero VSL, #book (inline calendar, "Pick a time."), who it's for, about the founder, FAQ.

Rules:
- **No booking button in the header.** The header is the wordmark only (plus About/FAQ text links where needed). Why: a second CTA up top competes with the video.
- **Floating pill** mirroring the page's one CTA. It appears only after the hero CTA scrolls away, and hides over the calendar, forms, the close CTA and the footer (`[data-fc-hide]`). It sits centered at bottom 20px + safe area. Reduced motion: fade only.
- **Niche pages** (`/for/<slug>`) are a JSON file merged over a default JSON, so a niche only lists what changes.
- Book in place where you can. The CTA scrolls to an inline calendar, not to another site, so the visitor never leaves the page to book. UNVERIFIED as a measured lift on our own traffic.

### 3a. VSL layout and player rules (live on olaceo.com /business and /builders)
Layout (code in [reference/tokens.css](reference/tokens.css), "centered VSL hero"):
- Eyebrow tracking .08em, margin-bottom 14px.
- H1: clamp(40px,3.3vw,56px)/1.05, max-width 880px.
- Lede: clamp(17px,1.35vw,19px), max-width 720px, 12px under the H1.
- Video: `width:min(880px,92vw,calc((100svh - 330px)*16/9))`, 22px under the lede, radius 16px, shadow 0 24px 60px -28px rgba(10,30,50,.35). The height term keeps the CTA above the fold on short laptops.
- CTA: min-width 320px, height 56px.
- Measured: at 1440x900 the video is 880x495 and the button sits at y 744-800 (inside the fold). At 1280x720 the video is 693x390. At 390x844 the 4:5 video is 358x448 and the button sits at y 712-768.
- Mobile: H1 32px/1.08, lede 15px. The 4:5 file is used only on an upright phone `(max-width:699px) and (orientation:portrait)`. On rotation it swaps files at the same second. Always `object-fit:contain`, so words are never cropped.

Player (code excerpt in [reference/motion.js](reference/motion.js) part C):
- **Before the first tap**: a muted preview loop with an 18px blur and 1.1 scale (12px and 1.13 on mobile), a static headline over a 112px play button (92px inner circle; 100/80 on mobile), and "Plays with sound" under it. The first tap unblurs over .42s, restarts at 0:00 with sound, and the blur never returns.
- **No forward skipping**: `maxW` grows only through natural playback (each step under 1.5s). Any seek past maxW + 0.3s snaps back. Playback rate is locked at 1. No PiP, remote playback, download or native fullscreen; iOS stays inline. Rewind and pause are always allowed. Keys: Space/K toggle, J -10s, Left -5s, Home; Right only inside the part already watched.
- **Controls**: the bar auto-hides 2s into playback. Buttons 44px (48 on mobile). Track 4px (6px on hover), thumb 14px.
- **End screen**: the CTA (focused) plus "Watch again".
- **Events**: VideoPreview, VideoSoundOn, VideoView25/50/75/100, VideoReplay.
- **Quality**: 4K is served only on big high-DPR screens when `mediaCapabilities` reports smooth decoding. If 4K fails it falls back to 1080 at the same second with sound kept. (Known bug pattern: a fallback that mutes. Fix: mute only on NotAllowedError.)
- **Play button centering**: the halo, circle and SVG share one grid cell (inset 0, margin auto, no transforms), and the triangle's area centroid sits +0.5px right. Measured 0.000px off-centre at DSF 3.
- Why no skip: the CTA should meet someone who heard the whole argument. Why the blur: it says "this is a video, tap it" without autoplaying sound.
- Targets: VSL 5 min or shorter. Play rate and engagement targets of 50% or more come from the Haynes VSL method. UNVERIFIED: we have no measured play rate yet.

### 3b. Forms and friction
- One screen, at most 3 fields (reference: first name, email, business website or name). No steps, no progress bar. Qualifying happens on the call and in the CRM.
- Every field gets the right `autocomplete`, `inputmode`, `autocapitalize`, `spellcheck=false` where needed, and `enterkeyhint` (next, next, go). Enter moves to the next field.
- Honeypot, same-origin check, size cap and rate limit on the server. Works with no JS (a real `action` + `method="post"`).
- The button says what happens: "Book my walkthrough". Fine print under it: "We only use this to set up your walkthrough. No list, no spam."
- Phone only if it's optional and asked after the commitment, with a separate unchecked SMS consent box whose wording the build checks.
- History (why): an 8-screen tap quiz was built first and then removed ("no eight taps, under two minutes"). Do not build multi-step quizzes.

### 3c. Copy rules (enforced where possible)
- Brand name lowercase ("olaceo") everywhere, even inside uppercase eyebrows (`<span class="lc">`). For a client, use their brand's own casing rule.
- No em dashes. The build fails on U+2014 in niche copy.
- No prices on the business funnel while `BIZ_SHOW_PRICES` is false. The build fails on `$<digit>` in rendered HTML.
- No invented stats, % claims, logos, testimonials or unlaunched product names in niche copy. The build fails on these (`bannedProof`).
- Value first: the outcome in the H1, the mechanism in the lede, the fear-remover under the CTA.
- Plain words, short sentences, contractions, second person. olaceo builder pages use the founder's voice ("Fam, ..."), never "bro" (the build fails on that word in emails).
- Covert selectivity: specifics only, never "handpicked", "chosen" or "exclusive".
- Never "hacked" claims: "could", never "is".
- An earnings disclaimer on coaching or income pages.

## Step 4. Tokens: type, spacing, grid, color, theme
Copy [reference/tokens.css](reference/tokens.css). Keep every non-color value. Swap the colors for the client's.

Typography (why: one variable face keeps it calm and saves a request; light big headlines read as premium):
- **One family**, self-hosted woff2 variable 300-700, `font-display:swap`, preloaded. Fallback: system-ui, -apple-system, "Segoe UI", sans-serif.
- Body: 400, 1.0625rem/1.6. Small: .9375rem.
- H1: weight 300, clamp(2.625rem,5.4vw,5rem), line-height 1.04, tracking -.03em.
- H2: weight 400, clamp(2rem,3.4vw,3.125rem), 1.1, -.025em.
- H3: 1.25rem, 600, 1.3, -.01em.
- `text-wrap:balance` on headings.
- Line lengths: lede 34ch, body 60ch, head-row paragraph 38ch.

Spacing and grid (why: big fixed rhythm = calm; clamp() keeps one system from 320 to 2560):
- Side margin `--m` clamp(20px,4vw,64px).
- Section padding `--gap` clamp(96px,11vw,168px).
- Container 1360px max.
- 12 columns, gap clamp(16px,2vw,32px).
- Section heading block bottom margin clamp(40px,4.4vw,64px).
- Breakpoints: 900, 700/699 and 560px.
- Radii: cards 22px, small 16px, actions and inputs pill (999px).
- Tap targets 44px or more. Primary buttons 54px (`.btn`), 56px in the hero and form (thumb reach).
- Nav 72px tall (64px on mobile).

Color (why: one accent means "act here"; everything else is ink on white with one soft tone step):
- Roles: ground (white), tone steps (mist, mist-2), text (ink, ink-2), accent (sky, hover sky-2, wash), line, error. That's the whole palette.
- The accent appears only on things you can act on: focus rings, the floating CTA, links on hover.
- Contrast: every text/background pair 4.5:1 or better (WCAG AA). For a client palette, re-measure every pair.
- Placeholder #5B6772 was chosen to pass AA on mist.
- App precedent: a call accent picked for one meaning only ("start a call"). Brass #946A30 with white text is 4.81:1.

Dark mode:
- The device decides through `prefers-color-scheme`. A header toggle overrides and is saved in localStorage (`ola_theme`). An inline head script sets the class before first paint (no flash) and sets `theme-color` to #FFFFFF / #050506.
- Dark tokens use the same names (see [reference/tokens.css](reference/tokens.css)), so every component flips for free.
- Dark ground is #050506, not pure black. Text is warm cream #F1EEE8. In dark, the accent becomes cream (no blue).
- Photos in dark: filter saturate(.78) brightness(.84) contrast(1.05).
- Buttons in dark: radius 14px.
- The swap is a View Transition: .36s cubic-bezier(.4,0,.2,1).
- The router "/" is light only.

## Step 5. Motion: liquid, not glass
Principles:
- **Transform and opacity only.** Nothing that triggers layout. CLS must stay 0 (the h1 word cycle was rebuilt twice because slot width animation measured CLS 0.002-0.004).
- **Two kinds of motion:**
  - Ambient/entrance: CSS with `--ease` cubic-bezier(.19,1,.22,1). Example: `.rise` 1.1s from 16px and opacity .001; stagger .08s.
  - Interactive (anything a finger touches): springs only, retargeted from current position AND velocity.
- **Reduced motion**: a global kill switch for all animations and transitions, plus per-feature fallbacks (fade only, crossfade instead of the drop, first state of a cycle).
- **60fps**: rAF-driven springs step with substeps of 1/240s or less (frame-rate independent). Measure, don't assume (step 7).
- **No glass**: no backdrop blur as decoration and no SVG blur filters in the hot path. The reference liquid nav is one 2D canvas metaball with a premixed opaque puddle color. In testing, that variant dropped the fewest frames: 3/14 vs 107/514 for transform-only at 390, 1x.

iOS-feel rules (code in [reference/motion.js](reference/motion.js) part A; unit-tested in the reference app):
- **Rubber band**: offset = (1 - 1/(0.55·x/d + 1))·d, where d = the viewport height (or the nav width for the nav). Slope .55 at the edge; it never reaches d. `unrubber()` inverts it, so a stretch caught mid-return continues from where it is.
- **Spring presets** (response .5s, k = (2π/.5)² ≈ 157.9, m = 1, b = 2ζ√k):
  - smooth ζ 1.0: default, settles, dismissals.
  - snappy ζ .85: presses (scale .92 on press).
  - bouncy ζ .70: release of the one hero button only ("the only bouncy spring in the app").
- **Interruptible**: `Drive.to()` retargets mid-flight and keeps x and v. Nothing ever restarts from rest.
- **Velocity handoff**: finger velocity is a least-squares fit over the last 80ms (px/s). On release it goes into the spring as its starting velocity.
- **1:1 drag**: during a drag `hold()` puts the value exactly under the finger (the spring lets go).
- **Velocity-projected snap**: where the flick would come to rest, project = x + (v/1000)·.998/(1-.998). Snap to the target nearest that point. Check: 1000 px/s lands about 499px on.
- Swipe between tabs: axis lock after 8px with |dx| at least 1.2|dy|. Commit past 30% width or a flick over .45 px/ms. Springs: back spring(260,25), slide spring(200,23) (about 2% overshoot). Nav magnet .42.
- Feedback: tap sound gain 0.2, ticks rate-limited to 55ms, haptic 10ms (Android snap pattern [14,46,22]). The AudioContext opens only in a calm idle slot (first-touch jank fix).

Marketing-site motion (live on olaceo.com):
- Router loader 1.78s (0.4s on return).
- H1 word cycle: 640ms swap cubic-bezier(.22,1,.36,1), 2.6s hold, transform-only repack. Measured 0.0000px movement of fixed words, gaps within 0.02px of one space, CLS 0. Stops when the VSL plays with sound.
- Floating pill: .5s fade and rise 12px.
- Mobile menu sheet: opacity .32s, transform .5s, links staggered .06-.27s.

## Step 6. Build
Stack (reference): one Cloudflare Worker serving pre-built static pages, D1 for leads, KV for video and photos.
- A build script fills `{{>partials}}` and `{{VARS}}` from `site.config.json`. **site.config.json is the client swap point**: names, links, booking URL, video sources, flags like `BIZ_SHOW_PRICES` and `SECTIONS`.
- **Build guardrails (copy them)**: fail on unfilled `{{...}}`, em dashes, `$<digit>` with prices off, banned proof words, consent wording that drifts from the server copy, and banned slang.
- HTML-first: every link a real anchor, forms post without JS, `noscript.css` for no-JS states. JS adds `.js` and enhances.
- Security headers (set in the Worker): a strict CSP with no inline styles and a hash for the one head script; HSTS; X-Frame-Options DENY; COOP same-origin; Permissions-Policy. Third parties (the booking embed) are added to CSP only when enabled.
- Caching: /fonts, /img, CSS and JS immutable for 1 year; HTML max-age=0 must-revalidate. Video served with Range support. Values over the 25MiB KV cap are split into 8MiB parts.
- Images: AVIF/WebP srcset 640-2400, the hero preloaded with `fetchpriority=high`. Video `preload=metadata`, with only the poster and preview before the tap.
- Tracking: one event per funnel step to dataLayer + a first-party beacon (`/api/e`, no PII, no cookie). Meta pixel only with consent.
- SEO/AEO:
  - Unique title and description per page.
  - OG/Twitter with a 1200x630 image.
  - JSON-LD (Organization, Person, WebSite, WebPage hasPart).
  - robots.txt (Disallow /api/) and sitemap.xml with priorities (/ 1.0, ICP pages .9).
  - `llms.txt`.
  - One h1 per page.
  - Staging and preview hosts send `X-Robots-Tag: noindex`.
  - UNVERIFIED: the AEO benefit of llms.txt is not measured.

## Step 7. Verify gates (nothing ships until every row passes)
Tools: Playwright/CDP at DSF 2-3, with screenshots at **390x844 and 1440x900** (plus 375x667 for the fold, and 320, 899, 900, 1024x640 for breakpoints).

| # | Gate | Pass rule | How it's measured | Reference result |
|---|---|---|---|---|
| G1 | ICP split | Every ICP reaches its page in 1 tap from "/", real anchors, no auto-redirect | click test, no-JS test | router 39/39 |
| G2 | One CTA | One primary button per page; secondary = text links; no header book button | DOM count | frictionless suite 81/81 |
| G3 | Fold | H1, video and CTA visible at 390x844 and 1440x900; CTA visible at 1280x720 and 375x667 | getBoundingClientRect | button y 712-768 (390), 744-800 (1440) |
| G4 | Centering | Centered elements 0.5 device px off or less (app target); marketing pages measured to 0.02 CSS px or less | bbox math at DSF 2-3 | 0.00-0.13 device px; pill gap diff 0.016px |
| G5 | Layout shift | CLS 0 through every animation state | PerformanceObserver over a full cycle | 0 (h1 cycle, router) |
| G6 | 60fps | Interactive motion: page rAF 0 dropped at 1x; compositor drops reported at 1x and 4x CPU | trace + rAF drop count | liquid nav 390: rAF 1612/0 dropped; compositor 6/1523 |
| G7 | Reduced motion | Every animation has a reduced path; nothing moves that the user didn't cause | emulate prefers-reduced-motion | pass in all suites |
| G8 | No-JS | Links work, forms post, poster shows sharp | JS disabled run | pass (router, forms) |
| G9 | VSL rules | No forward seek by any input, rewind and pause work, playsinline, end CTA | player suite | /business 42/42, /builders 54/54 |
| G10 | Copy lint | Build passes (no em dash, no $ with prices off, no banned proof); human read for invented claims | build + read | pass |
| G11 | Performance | Lighthouse mobile Performance 90+, LCP < 2.5s, CLS < 0.1, TBT < 200ms | Lighthouse mobile | Oct 21 earlier home: Perf 99, LCP 2.2s, CLS 0, TBT 0ms. UNVERIFIED for the current router, /business and /builders |
| G12 | Accessibility | Lighthouse a11y 100, WCAG AA contrast, 44px targets, visible focus, skip link, one h1 | Lighthouse + axe + manual | Oct 21 earlier home: 100. UNVERIFIED for current pages |
| G13 | SEO | Meta, JSON-LD valid, sitemap and robots, staging noindex | fetch + validator | Lighthouse SEO 69 on a preview host. UNVERIFIED on the prod domain |
| G14 | Console | 0 errors, 0 CSP violations | Playwright console | pass |
| G15 | Craft review | 2 rounds at 390 and 1440, at least 10 flaws listed and fixed per round | screenshots | per round |
| G16 | Real device | Checked on a physical iPhone and Android | hands | UNVERIFIED: not done yet (headless test machine with a software compositor) |

Demo videos for motion: record with CDP at a slow playback rate (0.08-0.1) and resample to an exact 60fps grid with 0 repeated frames.

## Step 8. Ship
1. **Staging first, always.** A separate Worker and database, noindex. Verify there with the gates.
2. **Prod only with an explicit OK** from the site owner (Jason for olaceo, the client for their site), for that specific deploy.
3. Before prod: take a database backup point (D1 Time Travel bookmark) and run additive migrations only, before the code that needs them. Write down the rollback target.
4. Deploy, then re-run the gates on prod (no test leads left behind: delete any qa rows).
5. Log the change in the project's decision log with a timestamp, version, rollback target and what was verified.
6. Never push to main or force-push without the owner's OK. Never print or commit secrets.

---

## Reference implementation (olaceo.com)
The values in this standard come from the olaceo.com source (private) and its staging app branches:
- Tokens and components: the main stylesheet (excerpts in [reference/tokens.css](reference/tokens.css)).
- Router: the homepage template plus a small router script.
- Builders and business paths: one page template each, with business copy in a niche JSON file and a 3-field start form.
- Player: the VSL module in the main script. Build guards: the build script.
- Headers and video serving: the Worker.
- Config swap point: `site.config.json`.
- Motion: the app's motion module and its unit tests (excerpts in [reference/motion.js](reference/motion.js)).

olaceo-only facts (do NOT carry to clients):
- Palette sky #1C6A94 / ink #121820 / white.
- Manrope.
- The drawn all-caps OLACEO wordmark (the logo stays caps; only the text name is lowercase).
- The founder's voice ("fam").
- olaceo's booking link.
- No-price frame wording.
- The builder and owner ICPs.

## Companion standards (optional, not included here)
If your agent has them, use these alongside; this standard doesn't replace them:
- **luxury-frontend-standard**: the craft floor and review loop.
- **talking-head-gold-standard / video-editing-standard**: the VSL video itself.

Known tensions with older design rules (this standard follows the live code):
1. **Tracked all-caps eyebrows.** Older rules say none. The live code has uppercase tracked eyebrows in dark mode (.18em) and .08em tracking on the business hero eyebrow. Suggest: sentence-case eyebrows for client sites. UNVERIFIED which one is preferred.
2. **Blur.** Older rules say no glassmorphism. The code uses backdrop-filter blur on the dark scrolled nav and the video end overlay, and the VSL pre-play blur. Rule: blur only as a functional state (pre-play, legibility over video), never as decorative glass.
3. **Motion timing.** Older rules say "fade or rise 150-300ms, nothing bouncy". The live site uses a 1.1s rise, a 1.78s router loader and a 640ms word swap, and the app uses springs including one bouncy ζ .70. Rule: micro-interactions 150-300ms; interactive motion = springs; bouncy only on one hero control.
4. **Inputs and buttons.** Keep pill inputs, 54px `.btn` and 56px in the hero and form, as measured.
5. **Container.** `.wrap` is max 1360px, not 1440px.
6. **Rubber band constant.** An older, simpler band `dx/(1+|dx|/120)*0.55` exists in some reference code. Use the iOS formula in [reference/motion.js](reference/motion.js) for new builds.

## Open (UNVERIFIED) list
- Lighthouse and axe on the current router, /business and /builders (G11-G13).
- A physical iPhone and Android pass (G16).
- VSL play rate and engagement on real traffic.
- Whether the router split raises bookings vs a single page (no A/B data).
- A final call on tensions 1-3.
