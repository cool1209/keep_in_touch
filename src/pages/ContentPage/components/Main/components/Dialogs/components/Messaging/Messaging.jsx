import React from 'react';
import styles from './Messaging.module.css';
import { Route, Routes } from 'react-router-dom';
import WithNoData from '../../../../../../../shared/WithNoData/WithNoData';
import MessagingItemContainer from './MessagingItem/MessagingItemContainer';


const Messaging = ({
  dialogs,
  isContactSelected,
}) => {

  return (
    <ul className={styles.wrapper}>
      {isContactSelected
      ? <Routes>
          {dialogs.map(dialog => (
            <Route
              path={`${dialog.id}`}
              key={dialog.id} 
              element={ <MessagingItemContainer dialog={dialog} /> }
            />
          ))}
        </Routes>

      : <div className={styles.hint}>
          {dialogs.length
            ? <WithNoData message={"Please select a contact"} />
            : <WithNoData message={"You don't have any dialogue..."} />
          }
        </div>
      }
    </ul>
  );
};

export default Messaging;
