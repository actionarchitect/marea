export type Locale = 'ko' | 'en'

export const locales: Locale[] = ['ko', 'en']
export const defaultLocale: Locale = 'ko'

const dictionaries = {
  ko: () => import('./ko.json').then((m) => m.default),
  en: () => import('./en.json').then((m) => m.default),
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries[defaultLocale]()
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}
