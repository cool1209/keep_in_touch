import React, { useEffect } from 'react';
import styles from './Dialogs.module.css';

import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import server from '../../../../../../backend/server';

const Dialogs = ({ user, setDialogs }) => {
  useEffect(() => {
    server.get('server/api/dialogs/' + user.id)
    .then(dialogs => {
      setDialogs(dialogs)
    });
  }, []);

  return (
    <section className={styles.dialogs}>
      <ContactsContainer />
      <MessagesContainer />
    </section>
  );
};

export default Dialogs;
