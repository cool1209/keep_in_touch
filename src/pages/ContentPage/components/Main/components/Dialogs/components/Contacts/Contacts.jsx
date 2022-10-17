import React from 'react';
import CustomNavLink from '../../../../../../../shared/CustomNavLink';
import ContactsStyles from './Contacts.module.css';

const Contacts = ({ dialogs }) => {
  return (
    <ul className={ContactsStyles.wrapper}>
      {dialogs.map(dialog => (
        <CustomNavLink
          to={`${dialog.id}`}
          name={dialog.contact}
          style={[ContactsStyles.contact, ContactsStyles.activeLink]}
          key={dialog.id}
        />
      ))}
    </ul>
  );
}

export default Contacts;
