import React from 'react';

import ContactsContainer from './Contacts/ContactsContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import Preloader from '../../shared/Preloader/Preloader';
import styles from './Messaging.module.scss';
import WithNoData from '../../shared/WithNoData/WithNoData';

const Messaging = ({ totalDialogs }) => {
  return (
    <>
      {totalDialogs === null
        ? <Preloader />

        : <div  className={styles.messaging}>
            {totalDialogs > 0
              ? <section className={styles.messaging__content}>
                  <ContactsContainer />
                  <DialogsContainer />            
                </section>

              : <WithNoData message={"You don't have any dialogue..."} />
            }
          </div>
      }
    </>
  );
};

export default Messaging;
