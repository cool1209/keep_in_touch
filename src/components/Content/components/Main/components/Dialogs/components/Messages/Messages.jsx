import React from 'react';
import styles from './Messages.module.css';
import { Route, Routes } from 'react-router-dom';
import Message from './components/Message/Message';


const Messages = ({
  user,
  users,
  dialogs,
  newMessageText,
  onUpdateText,
  onSendMessage
}) => {
  const userDialogs = dialogs
  .filter(dialog => dialog.membersId.includes(user.id));

  const getAuthorAvatar = (id) => users.find(user => user.id === id).avatar;

  const parseDialog = (dialog) => ({
    id: dialog.id,
    messages: dialog.messages.map(message => ({
      id: message.id,
      authorId: message.authorId,
      authorAvatar: getAuthorAvatar(message.authorId),
      message: message.message
    }))
  });

  return (
    <ul className={styles.messages}>
      <h2 className={styles.messages__hint}>
        Please select a contact
      </h2>

      <Routes>
        {userDialogs.map(dialog => (
          <Route
            path={`${dialog.id}`}
            key={dialog.id} 
            element={
              <li className={styles.messages__container}>
                <ul className={styles.messages__dialogMessages}>
                  {parseDialog(dialog).messages.map(message => (
                    <Message 
                      message={message}
                      user={user}
                      key={message.id}
                    />
                  ))}
                </ul>

                <div className={styles.messages__sendMessage}>
                  <input
                    type="text"
                    className={styles.messages__input}
                    onChange={(e) => onUpdateText(e.target.value)}
                    placeholder="New message..."
                    value={newMessageText}
                  />
                  <button
                    className={styles.messages__btn}
                    onClick={() => onSendMessage(dialog.id, user.id)}
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

export default Messages;
