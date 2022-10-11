import React from 'react';
import styles from './Dialogs.module.css';

import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';

const Dialogs = ({ user, dialogs }) => {
  const userDialogs = dialogs
    .filter(dialog => dialog.membersId.includes(user.id));

  return (
    <section className={styles.dialogs}>
      {userDialogs.length
      ? <>
          <ContactsContainer />
          <MessagesContainer />
        </>
      : <WithNoData message={"You don't have any dialogue..."} />
      }
    </section>
  );
};

export default Dialogs;
