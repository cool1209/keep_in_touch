import React from 'react';
import LogoutButtonStyles from './LogoutButton.module.css';
import GetIcon from '../../../../../../../../../assets/img/GetIcon';

const LogoutButton = ({ userId, logoutUser }) => {
  return (
    <button
      className={LogoutButtonStyles.logoutBtn}
      onClick={() => logoutUser(userId)}
    >
      Logout
      <GetIcon id='logout-icon' />
    </button>
    );
};

export default LogoutButton;
