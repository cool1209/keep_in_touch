import React from 'react';
import MessagingStyles from './Messaging.module.css';
import { Route, Routes } from 'react-router-dom';
import WithNoData from '../../../../../../../shared/WithNoData/WithNoData';
import MessagingItem from './MessagingItem/MessagingItem';


const Messaging = ({
  user,
  dialogs,
  isContactSelected,
  newMessageText,
  onUpdateText,
  onSendMessage,
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
                  user={user}
                  newMessageText={newMessageText}
                  onUpdateText={onUpdateText}
                  onSendMessage={onSendMessage}
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
