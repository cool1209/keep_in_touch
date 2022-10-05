import React from 'react';
import CustomNavLink from '../../../../shared/CustomNavLink';
import styles from './Contacts.module.css';

const Contacts = ({ user, users, dialogs }) => {
  const userDialogs = dialogs
    .filter(dialog => dialog.membersId.includes(user.id));

  const getContactId = (dialog) => (
    dialog.membersId.find(member => member !== user.id)
  );

  const getContactName = (dialog) => (
    users.find(user => user.id === getContactId(dialog))
  ).name;

  return (
    <ul className={styles.contacts}>
      {userDialogs.map(dialog => (
        <CustomNavLink
          to={`${dialog.id}`}
          name={getContactName(dialog)}
          style={[styles.contacts__contact, styles.activeLink]}
          key={dialog.id}
        />
      ))}
    </ul>
  );
}

export default Contacts;
