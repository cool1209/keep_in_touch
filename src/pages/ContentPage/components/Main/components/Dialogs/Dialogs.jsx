import React from 'react';
import DialogsStyles from './Dialogs.module.css';
import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messaging/MessagingContainer';
import Preloader from '../../../../../shared/Preloader/Preloader';

const Dialogs = ({ isDialogs }) => {
  return (
    <>
      {isDialogs === null
        ? <Preloader />

        : <section className={DialogsStyles.wrapper}>
            <ContactsContainer />
            <MessagesContainer />            
          </section>
      }
    </>
  );
};

export default Dialogs;
