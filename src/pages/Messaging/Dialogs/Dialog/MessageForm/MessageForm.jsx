import React from "react";

import styles from "./MessageForm.module.scss";

const MessageForm = ({
  messageText,
  onHandleChange,
  onHundleSubmit
}) => {

  return (
    <form className={styles.messageForm} onSubmit={onHundleSubmit}>
      <input
        type="text"
        className={styles.messageForm__input}
        onChange={onHandleChange}
        placeholder="New message..."
        value={messageText}
      />

      <button
        className={styles.messageForm__button}
        type='submit'
      >
        Send
      </button>
    </form>
  );
};

export default MessageForm;
