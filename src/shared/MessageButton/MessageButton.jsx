import React from 'react';

import styles from './MessageButton.module.scss';

const MessageButton = () => {
  return (
    <button 
      className={styles.button}
      onClick={() => console.log('Message button was clicked')}
    >Message</button>
  );
};

export default MessageButton;
