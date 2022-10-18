import React, { useEffect } from 'react';
import DialogsStyles from './Dialogs.module.css';

import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import server from '../../../../../../backend/server/server';

const Dialogs = ({ user, setDialogs }) => {
  useEffect(() => {
    server.get(`server/api/dialogs?user=${user.id}`)
    .then(dialogs => {
      setDialogs(dialogs.items)
    });
  }, []);

  return (
    <section className={DialogsStyles.wrapper}>
      <ContactsContainer />
      <MessagesContainer />
    </section>
  );
};

export default Dialogs;
