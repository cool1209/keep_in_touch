import React from 'react';
import Dialog from './Dialog/Dialog';
import styles from './DialogList.module.css';

const DialogList = ({ dialogs }) => {
  return (
    <ul className={styles.dialogList}>
      {dialogs.map(dialog => (
        <Dialog
          key={dialog.id}
          name={dialog.name}
          id={dialog.id}
          avatar={dialog.avatar}
        />
      ))}
    </ul>
  );
};

export default DialogList;
