import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogMessage from './DialogMessage/DialogMessage';
import {
  sendMessageCreator,
  updateMessageTextCreator
} from '../../../../../store/reducers/messagesReducer';


const Dialogs = ({ state, store }) => {
  const user = state.users.currentUser;
  const users = state.users.allUsers;
  const dialogs = state.messages.dialogs;
  const newMessageText = state.messages.newMessageText;
  
  const userDialogs = dialogs
  .filter(dialog => dialog.members.includes(user.id));

  const parseDialog = (dialog) => ({
    id: dialog.id,

    messages: dialog.messages.map(message => ({
      id: message.id,
      member: users.find(user => user.id === message.member).name,
      memberAvatar: users.find(user => user.id === message.member).avatar,
      message: message.message
    }))
  });
  
  const updateText = (text) => (
    store.dispatch(updateMessageTextCreator(text))
  );

  const sendMessage = (dialogId) => (
    store.dispatch(sendMessageCreator(dialogId))
  );

  return (
    <ul className={styles.dialogs}>
        <Routes>
          {userDialogs.map(dialog => (
            <Route
              path={`${dialog.id}`}
              key={dialog.id} 
              element={
                <li className={styles.dialogs__container}>
                  <ul className={styles.dialogs__dialogMessages}>
                    {parseDialog(dialog).messages.map(message => (
                      <DialogMessage 
                        message={message}
                        user={user}
                        key={message.id}
                      />
                    ))}
                  </ul>

                  <div className={styles.dialogs__sendMessage}>
                    <input
                      type="text"
                      className={styles.dialogs__input}
                      onChange={(e) => updateText(e.target.value)}
                      placeholder="New message..."
                      value={newMessageText}
                    />
                    <button
                      className={styles.dialogs__btn}
                      onClick={() => sendMessage(dialog.id)}
                    >Send</button>
                  </div>
                </li>
              }
            />
          ))}
        </Routes>
    </ul>
  );
};

export default Dialogs;
