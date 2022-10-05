import React from 'react';
import styles from './Dialogs.module.css';
import ContactsContainer from './Contacts/ContactsContainer';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = () => { 
  return (
    <section className={styles.messages}>
      <ContactsContainer />
      <MessagesContainer />
    </section>
  );
};

export default Dialogs;
