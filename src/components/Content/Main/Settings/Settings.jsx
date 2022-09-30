import React from 'react';
import styles from './Settings.module.css';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <h1>Settings page</h1>
      <h3> under development...</h3>

      <h4  className={styles.todo}>
        To Do:
      </h4>
      
      <ol>
        <li>Add to change user name</li>
        <li>Add to change user password</li>
        <li>Add to change user avatar</li>
        <li>Add to change user about</li>
        <li>Add to change user wallpaper</li>
      </ol>
    </div>
  );
};

export default Settings;
