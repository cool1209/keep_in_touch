import React from 'react';
import CustomNavLink from '../../../../../../../shared/CustomNavLink';
import styles from './Contacts.module.css';

const Contacts = ({ dialogs }) => {
  return (
    <ul className={styles.contacts}>
      {dialogs.map(dialog => (
        <CustomNavLink
          to={`${dialog.id}`}
          name={dialog.contact}
          style={[styles.contacts__contact, styles.activeLink]}
          key={dialog.id}
        />
      ))}
    </ul>
  );
}

export default Contacts;
