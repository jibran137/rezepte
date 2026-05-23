# Contributing

Thanks for sharing a recipe! Here is how to add yours.

## Add a recipe (the only required path)

1. Fork the repo and clone your fork.
2. Create a new file in `src/content/recipes/` named after the dish in German, kebab-case. Example: `rotkohl.md` or `kaiserschmarrn.md`.
3. Use this template:

```markdown
---
title: "Mein Lieblingsrezept"
title_en: "My favourite recipe"   # optional
author: "Dein Name"
city: "Berlin"                     # optional
date: 2026-05-23
servings: 4                        # optional
time_minutes: 45                   # optional
tags: ["hauptgericht", "vegetarisch"]
summary: "Eine kurze Beschreibung."        # optional
summary_en: "A short description."         # optional
ingredients:
  - { item: "Mehl", item_en: "Flour", amount: "500 g" }
  - { item: "Eier", item_en: "Eggs", amount: "3" }
---

(Optional notes about the recipe in markdown.)
```

4. Run the site locally to make sure it looks right:

```bash
npm install
npm run dev
```

5. Open a pull request describing your recipe in one or two sentences.

## Style notes

- Keep ingredient names natural — write what you'd write on a shopping list.
- `amount` is a free-text string (`"2 EL"`, `"1 Päckchen"`, `"nach Geschmack"`). Use the units you actually use.
- English translations (`title_en`, `summary_en`, `item_en`) are optional — if you skip them, the German version is shown on the English page too.
- Tags are lowercase, German. Common ones: `hauptgericht`, `beilage`, `suppe`, `kuchen`, `süß`, `herzhaft`, `vegetarisch`, `vegan`, `klassiker`, `winter`, `sommer`.

## Code changes

The site is small on purpose. Before adding new features:

- Open an issue to discuss the idea first.
- Keep things minimal — this is meant to feel like a paper cookbook, not a SaaS dashboard.
- New fields go in `src/content/config.ts` and need a sensible default so existing recipes still validate.

## Code of conduct

Be kind. We're cooking together.
