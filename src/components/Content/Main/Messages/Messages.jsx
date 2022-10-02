import React from 'react';
import styles from './Messages.module.css';
import Contacts from './Contacts/Contacts';
import Dialogs from './Dialogs/Dialogs';

const Messages = ({ store }) => { 
  return (
    <section className={styles.messages}>
      <Contacts store={store} />
      <Dialogs store={store} />
    </section>
  );
};

export default Messages;
