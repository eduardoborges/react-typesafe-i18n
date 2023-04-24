/* eslint-disable import/no-relative-packages */
import { createInstance } from '../../../src/index';

import en_US from './locales/en_US.json';
import pt_BR from './locales/pt_BR.json';

export const {
  t, setLanguage, language, avaliableLanguages,
} = createInstance({
  en_US,
  pt_BR,
}, 'en_US');
