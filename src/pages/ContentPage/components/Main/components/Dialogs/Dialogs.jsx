import React from 'react';
import s from './Dialogs.module.css';

import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';

const Dialogs = () => { 
  return (
    <section className={s.dialogs}>
      <ContactsContainer />
      <MessagesContainer />
    </section>
  );
};

export default Dialogs;
