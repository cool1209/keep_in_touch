import React from 'react';
import styles from './Companion.module.css';
import { CustomNavLink } from '../../../Sidebar/SideNav/SideNav';

const Companion = ({ dialog }) => {

  return (
    <CustomNavLink
      to={`${dialog.id}`}
      name={`${dialog.companion}`}
      style={[styles.companion, styles.activeLink]}
    />
  );
}

export default Companion;
