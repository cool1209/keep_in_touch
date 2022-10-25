import React from 'react';
import MessagingStyles from './Messaging.module.css';
import { Route, Routes } from 'react-router-dom';
import WithNoData from '../../../../../../../shared/WithNoData/WithNoData';
import MessagingItem from './MessagingItem/MessagingItem';


const Messaging = ({
  authUser,
  newMessageText,
  updateMessageText,
  sendMessage,
  dialogs,
  isContactSelected,
}) => {

  return (
    <ul className={MessagingStyles.wrapper}>
      {isContactSelected
      ? <Routes>
          {dialogs.map(dialog => (
            <Route
              path={`${dialog.id}`}
              key={dialog.id} 
              element={
                <MessagingItem 
                  dialog={dialog}
                  authUser={authUser}
                  newMessageText={newMessageText}
                  updateMessageText={updateMessageText}
                  sendMessage={sendMessage}
                />
              }
            />
          ))}
        </Routes>

      : <div className={MessagingStyles.hint}>
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
