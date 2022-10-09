import React from 'react';
import CustomNavLink from '../../../../../../../shared/CustomNavLink';
import s from './Contacts.module.css';

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
    <ul className={s.contacts}>
      {userDialogs.map(dialog => (
        <CustomNavLink
          to={`${dialog.id}`}
          name={getContactName(dialog)}
          style={[s.contacts__contact, s.activeLink]}
          key={dialog.id}
        />
      ))}
    </ul>
  );
}

export default Contacts;
