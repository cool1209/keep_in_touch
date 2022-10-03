import React from 'react';
import styles from './Messages.module.css';
import Contacts from './Contacts/Contacts';
import Dialogs from './Dialogs/Dialogs';

const Messages = ({ state, store }) => { 
  return (
    <section className={styles.messages}>
      <Contacts state={state} store={store} />
      <Dialogs state={state} store={store} />
    </section>
  );
};

export default Messages;
