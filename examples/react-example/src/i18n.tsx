import { createInstance } from 'react-stupid-i18n';

import en_US from './locales/en_US.json';
import pt_BR from './locales/pt_BR.json';

export const {
  t,
  setLanguage,
  language,
  avaliableLanguages,
} = createInstance({
  en_US,
  pt_BR,
}, 'en_US');
