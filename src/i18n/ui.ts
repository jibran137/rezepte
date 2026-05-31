export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  de: {
    'site.tagline': 'Eine offene Sammlung von Rezepten aus deutschen Küchen.',
    'site.intro':
      'Geteilt von Freundinnen, Freunden und Nachbarn. Trag dein Lieblingsrezept bei — auf GitHub, einfach per Pull Request.',
    'meta.home.title': 'rezepte — Hausgemachte Rezepte aus Deutschland',
    'hero.eyebrow': 'Eine offene Sammlung',
    'hero.title.before': 'Rezepte aus',
    'hero.title.swoop': 'deutschen',
    'hero.title.swash': 'Küchen.',
    'section.allRecipes': 'Alle Rezepte',
    'nav.home': 'Rezepte',
    'nav.contribute': 'Mitmachen',
    'recipe.ingredients': 'Zutaten',
    'recipe.ingredients.subhead': 'was du brauchst',
    'recipe.servings': 'Portionen',
    'recipe.time': 'Zubereitung',
    'recipe.minutes': 'Min.',
    'recipe.by': 'von',
    'recipe.in': 'aus',
    'recipe.back': 'Zurück zur Sammlung',
    'recipe.fallbackTag': 'Rezept',
    'card.minutes': 'Min',
    'card.serves': 'für',
    'footer.opensource': 'Open Source. Beiträge willkommen.',
    'footer.contribute': 'Rezept beitragen',
    'theme.toggle': 'Farbschema wechseln',
    'theme.light': 'Hell',
    'theme.dark': 'Dunkel',
  },
  en: {
    'site.tagline': 'An open collection of recipes from home kitchens in Germany.',
    'site.intro':
      'Shared by friends and neighbours. Add your favourite — via a pull request on GitHub.',
    'meta.home.title': 'rezepte — Home-cooked recipes from Germany',
    'hero.eyebrow': 'An open collection',
    'hero.title.before': 'Recipes from',
    'hero.title.swoop': 'German',
    'hero.title.swash': 'home kitchens.',
    'section.allRecipes': 'All recipes',
    'nav.home': 'Recipes',
    'nav.contribute': 'Contribute',
    'recipe.ingredients': 'Ingredients',
    'recipe.ingredients.subhead': "what you'll need",
    'recipe.servings': 'Servings',
    'recipe.time': 'Time',
    'recipe.minutes': 'min',
    'recipe.by': 'by',
    'recipe.in': 'from',
    'recipe.back': 'Back to the collection',
    'recipe.fallbackTag': 'Recipe',
    'card.minutes': 'min',
    'card.serves': 'serves',
    'footer.opensource': 'Open source. Contributions welcome.',
    'footer.contribute': 'Contribute a recipe',
    'theme.toggle': 'Toggle colour theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['de']): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function localizedPath(lang: Lang, path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  if (lang === defaultLang) {
    return clean ? `${base}/${clean}` : `${base}/`;
  }
  const prefix = lang === 'en' ? 'en' : 'de';
  return clean ? `${base}/${prefix}/${clean}` : `${base}/${prefix}/`;
}
