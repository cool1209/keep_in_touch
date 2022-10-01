import React from 'react';
import styles from './Companion.module.css';
import { CustomNavLink } from '../../../Sidebar/SideNav/SideNav';

const Companion = ({ dialog, getDialogId }) => {
  return (
    <div onClick={() => {getDialogId(dialog.id); console.log(dialog.id)}}>
      <CustomNavLink
        to={`${dialog.id}`}
        name={`${dialog.companion}`}
        style={[styles.companion, styles.activeLink]}
      />
    </div>
  );
}

export default Companion;
