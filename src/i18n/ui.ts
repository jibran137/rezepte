export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    'site.tagline': 'Eine offene Sammlung von Rezepten aus deutschen Küchen.',
    'site.intro':
      'Geteilt von Freundinnen, Freunden und Nachbarn. Trag dein Lieblingsrezept bei — auf GitHub, einfach per Pull Request.',
    'nav.home': 'Rezepte',
    'nav.contribute': 'Mitmachen',
    'recipe.ingredients': 'Zutaten',
    'recipe.servings': 'Portionen',
    'recipe.time': 'Zubereitung',
    'recipe.minutes': 'Min.',
    'recipe.by': 'von',
    'recipe.in': 'aus',
    'recipe.back': '← Zurück zu allen Rezepten',
    'footer.opensource': 'Open Source. Beiträge willkommen.',
    'footer.contribute': 'Rezept beitragen',
  },
  en: {
    'site.tagline': 'An open collection of recipes from home kitchens in Germany.',
    'site.intro':
      'Shared by friends and neighbours. Add your favourite — via a pull request on GitHub.',
    'nav.home': 'Recipes',
    'nav.contribute': 'Contribute',
    'recipe.ingredients': 'Ingredients',
    'recipe.servings': 'Servings',
    'recipe.time': 'Time',
    'recipe.minutes': 'min',
    'recipe.by': 'by',
    'recipe.in': 'from',
    'recipe.back': '← Back to all recipes',
    'footer.opensource': 'Open source. Contributions welcome.',
    'footer.contribute': 'Contribute a recipe',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['de']): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/en${clean === '/' ? '' : clean}`;
}
