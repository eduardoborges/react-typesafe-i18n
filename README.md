# react-stupid-i18n

[![NPM](https://img.shields.io/npm/v/use-mask-input.svg)](https://www.npmjs.com/package/use-mask-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Bundle Size](https://badgen.net/bundlephobia/minzip/use-mask-input)](https://bundlephobia.com/result?p=use-mask-input)

TODO: Add description


## Features

TODO

## Using

### 1. Enable `resolveJsonModule` in your tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "resolveJsonModule": true,
    ...
  },
}

Is necessary to magic happens;

```
### 2. Install

```sh
npm i react-stupid-i18n
```

Create an `i18n.ts` file:

```typescript
import { createInstance } from 'react-stupid-i18n';

// import your files
import en_US from './locales/en_US.json';
import pt_BR from './locales/pt_BR.json';

export const {
  t, setLanguage, language, avaliableLanguages,
} = createInstance({
  en_US,
  pt_BR,
}, 'en_US');
```

Aaaand in your app:
```typescript
import React from 'react';
import { t } from './i18n';

function App() {
  return (
    <div className="App">
      {t('greetings.evening', { user: 'Eduardo' })}
    </div>
  );
}
```
