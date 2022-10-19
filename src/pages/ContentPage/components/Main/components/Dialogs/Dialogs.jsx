import React from 'react';
import DialogsStyles from './Dialogs.module.css';
import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messaging/MessagingContainer';

const Dialogs = () => {
  return (
    <section className={DialogsStyles.wrapper}>
      <ContactsContainer />
      <MessagesContainer />
    </section>
  );
};

export default Dialogs;
