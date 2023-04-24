import React from 'react';
import './App.css';
import {
  t, setLanguage, language, avaliableLanguages,
} from './i18n';

type AvaliableLanguages = typeof avaliableLanguages[number];

function App() {
  console.log('render');
  const changeLanguage = (lang: AvaliableLanguages) => {
    setLanguage(lang);
  };
  return (
    <div className="App">
      {t('hello')}
      <br />
      Current:
      {language}
      <br />
      <select onChange={(e) => changeLanguage(e.target.value as AvaliableLanguages)}>
        {avaliableLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
