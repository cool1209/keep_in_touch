import React from 'react';
import { NavLink } from 'react-router-dom';
import { GetImage } from '../../../../img/GetImage';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <NavLink to="/profile">
          <GetImage id={'header-logo'} />
        </NavLink>
        
        <h1 className={s.header__title}>
          Keep in touch
        </h1>
      </div>
    </header>
  );
};

export default Header;
