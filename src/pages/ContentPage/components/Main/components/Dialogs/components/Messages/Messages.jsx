import React from 'react';
import s from './Messages.module.css';
import { Route, Routes } from 'react-router-dom';
import Message from './Message/Message';


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
    <ul className={s.messages}>
      <h2 className={s.messages__hint}>
        Please select a contact
      </h2>

      <Routes>
        {userDialogs.map(dialog => (
          <Route
            path={`${dialog.id}`}
            key={dialog.id} 
            element={
              <li className={s.messages__container}>
                <ul className={s.messages__dialogMessages}>
                  {parseDialog(dialog).messages.map(message => (
                    <Message 
                      message={message}
                      user={user}
                      key={message.id}
                    />
                  ))}
                </ul>

                <div className={s.messages__sendMessage}>
                  <input
                    type="text"
                    className={s.messages__input}
                    onChange={(e) => onUpdateText(e.target.value)}
                    placeholder="New message..."
                    value={newMessageText}
                  />
                  <button
                    className={s.messages__btn}
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
