import React from 'react';
import styles from './Dialogs.module.css';

import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';

const Dialogs = () => { 
  return (
    <section className={styles.dialogs}>
      <ContactsContainer />
      <MessagesContainer />
    </section>
  );
};

export default Dialogs;
