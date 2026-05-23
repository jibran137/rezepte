# rezepte

*Eine offene Sammlung von Rezepten aus deutschen Küchen — an open collection of recipes from home kitchens in Germany.*

Built and maintained by a few friends. Contributions welcome — every recipe is just a markdown file in this repo.

## Stack

- [Astro](https://astro.build) — static site, ships almost no JavaScript
- Markdown content (one `.md` file per recipe)
- Bilingual: German (default) and English
- Deploys for free on Cloudflare Pages, Netlify, Vercel, or GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

## Add a recipe

1. Copy any file in `src/content/recipes/` and rename it (use the German recipe name in kebab-case, e.g. `rotkohl.md`).
2. Fill in the frontmatter fields. Required: `title`, `author`, `date`, `ingredients`. Optional: `title_en`, `summary`, `summary_en`, `city`, `servings`, `time_minutes`, `tags`, and `item_en` per ingredient (for English translations).
3. Open a pull request. That's it.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.

## Roadmap

This started simple on purpose. Things we'd like to add over time:

- [ ] Step-by-step instructions field (not just ingredients)
- [ ] Where the groceries came from + price field
- [ ] Calorie / nutrition info
- [ ] Map showing where contributors cook from
- [ ] Search and tag filtering
- [ ] User-submitted recipes via a simple form (with moderation)

Have an idea? Open an issue.

## License

MIT. The recipes themselves are shared under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — attribute the original author if you reuse them.
