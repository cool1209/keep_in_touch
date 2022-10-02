import React from 'react';
import styles from './Contacts.module.css';
import { CustomNavLink } from '../../../Sidebar/SideNav/SideNav';
import getCurrentUserData from '../../../../../functions/user-data.js';

const Contacts = ({ store }) => {
  const state = getCurrentUserData(store.getState());
  const dialogs = state.dialogsPage.dialogs;

  return (
    <ul className={styles.contacts}>
      {dialogs.map(dialog => (
        <CustomNavLink
          to={`${dialog.id}`}
          name={`${dialog.contact}`}
          style={[styles.contacts__contact, styles.activeLink]}
          key={dialog.id}
        />
      ))}
    </ul>
  );
}

export default Contacts;
