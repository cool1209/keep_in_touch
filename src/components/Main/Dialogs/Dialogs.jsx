import React from 'react';
import styles from './Dialogs.module.css';
// import Dialog from './Dialog/Dialog';

const Dialogs = ({ store }) => {
  const state = store.getState();
  const { user, dialogsPage } = state;
  const { dialogs, newMessageText } = dialogsPage;

  return (
    <section className={styles.messages}>
      <h2 className={styles.title}>
        Dialogs:
      </h2>

      <div className={styles.container}>
        <ul className={styles.dialogList}>
          {dialogs.map(dialog => (
            <li className={styles.dialog} key={dialog.id}>
              <div>
                {dialog.companion}
              </div>
            </li>
          ))}
        </ul>


      </div>
    </section>
  );
};

export default Dialogs;





{/* <div className={styles.container}>
  <ul className={styles.dialogList}>
    {dialog.members.map(member => (
      <li className={styles.dialog}>
        {member}
      </li>
    ))}
  </ul>

  <div className={styles.messagesWrapper}>
    <ul className={styles.messageList}>
      {dialog.messages.map(message => (
        <Message
          key={message.id}
          memberAva={message.memberAva}
          member={message.member}
          message={message.message}
        />
      ))}
    </ul>
    
    <div className={styles.myMessage}>
      <input
        type="text"
        placeholder="Input your message..."
        className={styles.myMessageInput}
        value={newMessageText}
        onChange={(e) => updateText(e.target.value)}
      />

      <button
        className={styles.myMessageBtn}
        onClick={sendMessage}
      >Send</button>
    </div>
  </div>
</div> */}
