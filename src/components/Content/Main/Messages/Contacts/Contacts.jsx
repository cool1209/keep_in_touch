import React from 'react';
import CustomNavLink from '../../../../shared/CustomNavLink';
import styles from './Contacts.module.css';

const Contacts = ({ state }) => {
  const user = state.users.currentUser;
  const users = state.users.allUsers;
  const dialogs = state.messages.dialogs;
  const userDialogs = dialogs
    .filter(dialog => dialog.membersId.includes(user.id));

  const getUserContactId = (dialog) => (
    dialog.membersId.find(member => member !== user.id)
  );

  const getUserContactName = (dialog) => (
    users.find(user => user.id === getUserContactId(dialog))
  ).name;

  return (
    <ul className={styles.contacts}>
      {userDialogs.map(dialog => (
        <CustomNavLink
          to={`${dialog.id}`}
          name={getUserContactName(dialog)}
          style={[styles.contacts__contact, styles.activeLink]}
          key={dialog.id}
        />
      ))}
    </ul>
  );
}

export default Contacts;
