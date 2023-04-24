import React from 'react';
import './App.css';
import { t } from './i18n';

function App() {
  return (
    <div className="App">
      {t('greetings.evening', { user: 'Eduardo' })}
    </div>
  );
}

export default App;
