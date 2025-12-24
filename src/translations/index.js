import { en } from './en'
import { ar } from './ar'
import { tr } from './tr'
import { uz } from './uz'
import { ru } from './ru'

export const translations = {
  en,
  ar,
  tr,
  uz,
  ru
}

export const getTranslation = (language) => {
  return translations[language] || translations.en
}

