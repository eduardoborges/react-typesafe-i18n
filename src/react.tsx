/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import int from './core';

export const context: React.Context<T> = React.createContext({});

export const { Provider: ContextProvider } = context;

export const Provider: React.FC<any> = ({ children }) => {
  const [language, setLanguage] = React.useState('en');
  const i18n = int(language);

  const t = (key: string) => i18n.t(key, '');

  return (
    <ContextProvider value={{ t, setLanguage }}>
      {children}
    </ContextProvider>
  );
};
