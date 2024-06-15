import React from 'react';
import s from './Main.module.scss';

const Main = () => {
  return (
    <div className={s.main}>
      <Sidebar />
    </div>
  );
};

export default Main;
