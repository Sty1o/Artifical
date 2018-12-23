import { merge } from 'ramda';
// import store from 'store2';


import { gb } from './eng';
import { ru } from './ru';

export const messages = {
  eng,
  ru,
};

export const DEFAULT_LOCALE = 'eng';

export function getLocaleMessages(lang, msg) {
  const currentLangFile = messages[lang.toLowerCase()];
  if (currentLangFile) {
    return currentLangFile[msg];
  } else {
    return null;
  }
}

export function currentLocale() {
  return store.get('DEFAULT_LANG') || DEFAULT_LOCALE;
}
