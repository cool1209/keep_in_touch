import React from 'react';
import styles from './Dialogs.module.css';
import ContactsContainer from './components/Contacts/ContactsContainer';
import MessagesContainer from './components/Messaging/MessagingContainer';
import Preloader from '../../../../../shared/Preloader/Preloader';

const Dialogs = ({ isDialogs }) => {
  return (
    <>
      {isDialogs === null
        ? <Preloader />

        : <section className={styles.wrapper}>
            <ContactsContainer />
            <MessagesContainer />            
          </section>
      }
    </>
  );
};

export default Dialogs;
