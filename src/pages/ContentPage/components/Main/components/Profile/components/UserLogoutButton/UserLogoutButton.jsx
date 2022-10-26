import React from 'react';
import { NavLink } from 'react-router-dom';
import GetIcon from '../../../../../../../../assets/img/GetIcon';
import styles from './UserLogoutButton.module.css';

const UserLogoutButton = ({ onLogoutUser }) => {
  return (
      <NavLink to='/'>
        <button
          className={styles.logoutBtn}
          onClick={onLogoutUser}
        >
          Logout
          <GetIcon id='logout-icon' />
        </button>
      </NavLink>
    );
};

export default UserLogoutButton;
