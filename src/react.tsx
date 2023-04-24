import { computed, signal } from '@preact/signals-react';
import { get, PathInto } from './utils';

export function createInstance<T>(locales: T, initialLanguage: keyof T) {
  type LocaleName = keyof T;
  type Locale = T[LocaleName];

  const language = signal(initialLanguage);
  const dictionary = computed(() => locales[language.value]);
  const avaliableLanguages = computed(() => Object.keys(locales!) as LocaleName[]);

  const setLanguage = (_language: LocaleName) => {
    language.value = _language;
  };

  function t(key: PathInto<Locale>): string {
    if (!dictionary) return '';

    return get(
      dictionary.value as Record<string, string>,
      (key as string).split('.'),
    );
  }

  return {
    t,
    language: language.value,
    avaliableLanguages: avaliableLanguages.value,
    setLanguage,
  };
}
