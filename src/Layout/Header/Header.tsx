import React from 'react';
import { Link } from 'react-router-dom';
import ContainerContent from '../../Components/ContainerContent/ContainerContent';
import LogoIcon from '../../Images/svg/LogoIcon/LogoIcon';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <ContainerContent>
        <div className={s.header__container}>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
      </ContainerContent>
    </header>
  );
};

export default Header;
