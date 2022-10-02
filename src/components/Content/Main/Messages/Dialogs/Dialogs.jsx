import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Dialogs.module.css';
import getCurrentUserData from '../../../../../functions/user-data.js';
import {
  sendMessageCreator,
  updateMessageTextCreator
} from '../../../../../store/reducers/messagesReduser';
import DialogMessage from './DialogMessage/DialogMessage';


const Dialogs = ({ store }) => {
  const state = getCurrentUserData(store.getState());
  const dialogs = state.dialogsPage.dialogs;
  const inputValue = state.dialogsPage.newMessageText;
  const user = state.user;
  const updateText = (text) => (store.dispatch(updateMessageTextCreator(text)));
  const sendMessage = (dialogId) => (store.dispatch(sendMessageCreator(dialogId)));

  return (
    <ul className={styles.dialogs}>
        <Routes>
          {dialogs.map(dialog => (
            <Route
              path={`${dialog.id}`}
              key={dialog.id} 
              element={
                <li className={styles.dialogs__container}>
                  <ul className={styles.dialogs__dialogMessages}>
                    {dialog.messages.map(message => (
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
                      value={inputValue}
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
