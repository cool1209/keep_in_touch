import React from 'react';
import styles from './Dialogs.module.css';

import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';

const Dialogs = ({ dialogs }) => {
  return (
    <section className={styles.dialogs}>
      {dialogs.length
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
