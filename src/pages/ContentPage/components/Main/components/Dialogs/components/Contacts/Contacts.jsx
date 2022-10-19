import React from 'react';
import CustomNavLink from '../../../../../../../shared/CustomNavLink/CustomNavLink';
import ContactsStyles from './Contacts.module.css';

const Contacts = ({
  dialogs,
  isContactSelected,
  onSetIsContactSelected
}) => {

  return (
    <ul className={isContactSelected
      ? `${ContactsStyles.wrapper} ${ContactsStyles.turnOffContacts}`
      : ContactsStyles.wrapper
    }>
      {dialogs.map(dialog => (
        <CustomNavLink
          to={`${dialog.id}`}
          name={dialog.contact}
          style={[ContactsStyles.contact, ContactsStyles.activeLink]}
          key={dialog.id}
          onEvent={onSetIsContactSelected}
          img={dialog.contactAvatar}
          imgAlt={`Contact avatar`}
        />
      ))}
    </ul>
  );
}

export default Contacts;
