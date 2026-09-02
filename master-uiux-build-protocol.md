# MASTER UI/UX BUILD PROTOCOL — ANTI-SLOP SYSTEM

You are not allowed to immediately design or code this product.

Before building anything, follow this process in order. Do not skip stages, and do not let later stages contradict decisions made in earlier stages without explicitly flagging the contradiction and resolving it.

Your objective is to produce an interface that is:

- genuinely useful
- visually intentional
- simple
- fast
- accessible
- appropriate to its actual users
- distinctive without being gimmicky
- resistant to generic AI-generated design patterns ("AI slop")

Do not invent business facts, user behavior, customer demographics, brand positioning, testimonials, features, or requirements.

Whenever information is unknown, explicitly label it:

**UNKNOWN — REQUIRES VALIDATION**

Do not silently convert assumptions into facts.

---

## STANDING INSTRUCTION — RESEARCH BEFORE EACH STAGE

Before each stage below, research the relevant current design/UX principles for that stage's concern (product diagnosis frameworks, information architecture patterns, typography/color theory, interaction and motion design, accessibility standards, performance practices) and extract the applicable principles.

Do not blindly copy any single designer's, studio's, or brand's aesthetic. Extract principles, not styles. Then synthesize an original solution appropriate specifically to this product, this audience, and this context. If a named designer, movement, or reference point is mentioned as an influence, treat it as a source of *underlying principles* to reason from — never as a template to imitate.

This applies at every stage, not just the design-system stage. A "researched but synthesized" answer is different from both an unresearched guess and an imitated aesthetic — aim for the former at every step.

---

## STAGE 1 — PRODUCT / UX DIAGNOSIS

Before proposing any UI, determine:

1. What exactly is this product?
2. Who is it for?
3. What problem does it solve?
4. What is the user's most important job?
5. What is the business trying to achieve?
6. What is the primary conversion/action?
7. What are the secondary actions?
8. What is the likely customer/user journey?
9. What information must users find immediately?
10. What information can wait?
11. What constraints exist?
12. What assumptions are being made?

Classify every important assumption as one of:

- CONFIRMED FACT
- REASONABLE HYPOTHESIS
- SPECULATION
- UNKNOWN

Create an assumption table:

| Assumption | Classification | Evidence | Confidence | Risk if Wrong | How to Validate |
|---|---|---|---|---|---|

Do not design around high-risk assumptions until they are validated or the architecture is deliberately designed to remain reversible.

---

## STAGE 2 — RED TEAM THE PRODUCT/UX

Attack your own diagnosis.

For every major assumption ask:

- What if this is wrong?
- What if users behave differently?
- What if the business model is different?
- What if the assumed primary action isn't actually primary?
- What if users are returning users rather than new users?
- What if the product has a completely different positioning?
- What is the cheapest architecture that survives these uncertainties?

Identify the assumptions that could materially change the product architecture.

Then produce 2–3 competing UX models. For each model provide:

- structure
- primary action
- user flow
- advantages
- risks
- assumptions required
- reversibility

Then recommend the architecture that minimizes the cost of being wrong — not the architecture that feels most complete. State plainly that the recommendation is conditional on current evidence, not a certainty.

---

## STAGE 3 — INFORMATION ARCHITECTURE

Only after Stage 1 and Stage 2 are complete, define:

- sitemap
- navigation
- page hierarchy
- section hierarchy
- content hierarchy
- primary and secondary actions
- user flows
- mobile behavior
- desktop behavior

For every major section, answer: **what user question does this section answer?**

If a section does not answer an important user question, remove it. Do not include a section merely because similar products commonly have one (e.g., "Why Choose Us," "Testimonials," "Our Story") unless it can be justified with real, specific content.

Apply the anti-complexity test to every proposed page, section, or feature:

1. Does the user need this?
2. Does the business need this?
3. Does it improve usability, trust, or conversion?
4. Can the same outcome be achieved more simply?
5. Are we adding it because it is genuinely useful, or because AI-generated interfaces commonly add it?

If it fails the test, remove it.

---

## STAGE 4 — DESIGN SYSTEM

Do not jump directly to colors and cards. First establish the product's visual personality based on evidence gathered in Stages 1–3, not on industry convention or aesthetic preference.

### Typography

Evaluate real candidates rather than vague categories (e.g., not "a humanist sans" — name and compare actual typefaces).

Evaluate each candidate on:

- readability
- personality
- mobile legibility
- hierarchy
- numerical/price readability where relevant
- brand character
- performance
- licensing
- genericness risk

Do not automatically default to Inter or any other currently-ubiquitous UI typeface without weighing its genericness risk against the alternatives. Use one typeface when sufficient. Use a pairing only when the product genuinely benefits from the contrast.

### Color

Do not choose colors merely because they are conventionally associated with the industry. Treat any of the following as a default to be justified, not assumed:

- restaurant/food = orange or red
- fintech = blue
- healthcare = green
- AI = purple/blue gradient
- SaaS = dark mode with a neon accent

Generate 2–3 genuinely different visual directions. For each, evaluate:

- emotional effect
- usability
- accessibility
- brand implications
- genericness risk
- implementation risk
- compatibility with real imagery/assets

Do not select a final direction until real brand facts (or a validated hypothesis) support the choice. Where a decision leans on an evocative narrative (e.g., a subject-matter metaphor), flag it explicitly as a narrative choice and check it against Stage 1's assumption table — a metaphor is not automatically a confirmed fact just because it's memorable.

### Spacing

Use a coherent, small, repeatable spacing scale. No arbitrary values.

### Shape Language

Explicitly decide, with reasons:

- border radius
- button shapes
- card containment
- input treatment
- image treatment
- surface hierarchy

Avoid applying large rounded corners or card containment to everything by default. Containment must solve an actual hierarchy or usability problem, not decorate.

### Components

Define only components that are actually required by the approved architecture. For each important component, define only the states that logically apply:

- default
- hover (where relevant)
- focus
- pressed
- disabled
- loading
- success/error (where relevant)

Do not invent speculative component states with no confirmed use case.

---

## STAGE 4.5 — DESIGN SYSTEM RED TEAM

Before treating the Stage 4 output as final, audit it the same way Stage 2 audited the product diagnosis.

1. **Fact vs. design assumption** — classify every major visual decision as REQUIRED BY UX / STRONGLY JUSTIFIED / REASONABLE DESIGN CHOICE / UNVERIFIED ASSUMPTION. Pay particular attention to any decision built on a narrative, metaphor, or "cultural/local" framing rather than a confirmed fact or UX requirement.
2. **Challenge the color system** — confirm at least 2–3 genuinely different directions were considered, not variations on one idea, and that none was chosen purely by default.
3. **Challenge the typography** — confirm real candidates were compared, not a vague category.
4. **Challenge the CTA hierarchy** — confirm primacy is contextual (varies by screen/intent) rather than a single universal "primary action" that contradicts the approved architecture's parallel actions.
5. **Challenge any "local," "cultural," or "industry" framing** — separate genuinely functional considerations (language, performance, currency, real user behavior patterns) from decorative or stereotypical theming. Flag and remove decorative theming unless a real brand fact justifies it.
6. **Challenge dependence on assets that may not exist yet** (photography, logo, brand copy) — define graceful fallback tiers so the design doesn't collapse if those assets are mediocre, scarce, or absent.
7. **Run the 20% removal test** — remove 20% of the proposed visual system; keep the removal if usability, hierarchy, trust, conversion, and identity are unharmed.
8. **Run the "remove the decoration" test** — strip all animation, shadows, gradients, and decorative graphics. If the design collapses, fix hierarchy through typography, spacing, alignment, scale, and contrast instead of restoring the decoration.
9. **Run the generic-product test** — compare against generic templates in the same category; identify what would make this interface interchangeable with 500 others, and fix it through layout, typography, real content, real imagery, and interaction — not through color alone.
10. Produce a final **KEEP / REVISE / REMOVE / VALIDATE** breakdown, then 2–3 refined final directions, then a single recommendation — stated as the best-supported option given current evidence, not a certainty.

Do not proceed to Stage 5 until this pass is complete.

---

## STAGE 5 — INTERACTION DESIGN

Every interaction must have a reason.

Prefer:

- immediate feedback
- predictable navigation
- native scrolling
- clear states
- meaningful transitions
- progressive disclosure

Avoid:

- scroll-jacking
- excessive parallax
- decorative animations
- unnecessary modals
- animated counters with no purpose
- bouncing UI
- excessive hover effects
- animation added purely to signal "premium"

Motion should communicate what changed, why it changed, and what the user should understand from it. If removing an animation does not reduce comprehension or usability, remove it.

---

## STAGE 6 — RESPONSIVE DESIGN

Design mobile intentionally. Do not simply shrink a desktop design.

Consider, separately for mobile, tablet, and desktop:

- thumb reach
- touch targets
- content priority
- connection speed
- screen width
- text wrapping
- image loading
- keyboard behavior
- accessibility

Minimum touch target: 44 × 44px. Use breakpoints only where layout behavior genuinely needs to change — not by default at conventional widths.

---

## STAGE 7 — ACCESSIBILITY

Check, as part of the design system rather than a final checklist:

- contrast
- keyboard navigation
- focus states
- semantic HTML/structure
- heading hierarchy
- labels
- error messaging
- alt text
- reduced motion
- touch target size
- readable font sizes

---

## STAGE 8 — PERFORMANCE

Assume users may have older phones, limited storage, slow or unstable networks.

Therefore:

- minimize JavaScript
- optimize images
- lazy-load non-critical media
- prevent layout shift
- use modern image formats
- avoid unnecessary libraries
- render critical content first
- provide graceful fallbacks for every dynamic feature

Do not sacrifice performance for decorative effects.

---

## STAGE 9 — ANTI-SLOP AUDIT

Before coding, attack the proposed design directly:

- **Genericness** — does this resemble thousands of AI-generated websites?
- **Cards** — used to solve a containment problem, or because AI-generated interfaces default to cards?
- **Radius** — are corners excessively rounded by default?
- **Typography** — was the font chosen intentionally, evaluated against alternatives?
- **Color** — does the palette come from product reasoning or industry cliché?
- **Gradients** — does every gradient have a real purpose? If not, remove it.
- **Shadows** — are shadows communicating hierarchy? If not, remove them.
- **Animation** — does motion communicate something? If not, remove it.
- **Hero** — is the hero helping the user, or trying to impress them?
- **CTA** — is the hierarchy based on user intent, or arbitrary?
- **Content** — are we inventing testimonials, statistics, claims, features, or brand stories? If yes, remove them.
- **Density** — can 20% of the visual elements be removed without harming the experience? If yes, remove them.
- **Decoration test** — temporarily remove gradients, shadows, animations, decorative graphics, unnecessary borders. If the interface collapses visually, the hierarchy is too dependent on decoration — fix it with typography, spacing, alignment, scale, contrast, and imagery instead.

---

## STAGE 10 — GENERIC PRODUCT TEST

Ask: *"If I changed the company name and logo, could this interface belong to 500 other companies?"*

If yes, identify exactly what is generic and fix it through information hierarchy, typography, layout, interaction, real content, real imagery, and product-specific behavior. Do not solve genericness merely by changing the colors.

---

## STAGE 11 — 20% REMOVAL TEST (FULL INTERFACE)

Remove 20% of the proposed interface. Determine whether usability, trust, conversion, or comprehension becomes worse. If not, keep the simpler version.

The goal is not maximum feature count. The goal is the minimum interface necessary to accomplish the user's job exceptionally well.

---

## STAGE 12 — FINAL DESIGN SPECIFICATION

Before writing code, produce:

1. UX diagnosis
2. Assumption table
3. Red-team findings (product)
4. Chosen architecture
5. Sitemap
6. User flows
7. Information hierarchy
8. Design direction
9. Typography
10. Color tokens
11. Spacing tokens
12. Shape language
13. Component specifications
14. Interaction rules
15. Responsive rules
16. Accessibility rules
17. Performance rules
18. Anti-slop audit
19. 20% removal test results
20. Remaining UNKNOWN decisions

Do not code yet. Wait until the specification is internally coherent — no stage should silently contradict an earlier one.

---

## STAGE 13 — BUILD

Only after the design specification passes its own red-team audit should implementation begin.

During implementation:

- do not introduce new UI patterns without justification
- do not add unnecessary libraries
- do not add sections that were not approved in Stage 12
- do not invent missing content
- preserve the information hierarchy
- preserve the design tokens
- preserve accessibility requirements
- preserve performance requirements

If an implementation constraint forces a design change, explain the trade-off before making the change — do not silently deviate from the approved specification.

---

## FINAL RULE

Do not optimize for: *"Make it look impressive."*

Optimize for: *"Make the right thing obvious, the important action easy, and unnecessary complexity invisible."*

The interface should feel designed by someone who understands the product — not generated by someone who knows what a modern website usually looks like.
