import React from 'react';
import s from './App.module.scss';
import Header from '../Header/Header';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Header />
    </div>
  );
};

export default App;
