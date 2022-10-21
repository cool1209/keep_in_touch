import React from 'react';
import CustomNavLink from '../../../../../../../shared/CustomNavLink/CustomNavLink';
import WithNoData from '../../../../../../../shared/WithNoData/WithNoData';
import ContactsStyles from './Contacts.module.css';

const Contacts = ({
  dialogs,
  isContactSelected,
  setIsContactSelected
}) => {

  return (
    <ul className={isContactSelected
      ? `${ContactsStyles.wrapper} ${ContactsStyles.turnOffContacts}`
      : ContactsStyles.wrapper
    }>
      {!dialogs.length && 
        <div className={ContactsStyles.hint}>
          <WithNoData message={"You don't have any dialogue..."} />
        </div>
      }

      {dialogs.map(dialog => (
        <div className={ContactsStyles.contactContainer} key={dialog.id}>
          <CustomNavLink
            to={`${dialog.id}`}
            name={dialog.contact}
            style={[ContactsStyles.contact, ContactsStyles.activeLink]}
            onEvent={setIsContactSelected}
            img={dialog.contactAvatar}
            imgAlt={`Contact avatar`}
          />
        </div>
      ))}
    </ul>
  );
}

export default Contacts;
