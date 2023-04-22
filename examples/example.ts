import ptBR from './locales/pt_BR.json';
import enUS from './locales/en_US.json';

import core from '../src/core';

const locales = {
  pt_BR: ptBR,
  en_US: enUS,
};

const { t } = core(locales);

t('greetings.casual.afternoon', 'en_US');
