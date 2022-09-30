import React from 'react';
import styles from './Settings.module.css';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <h1>
        Settings page under development...
      </h1>

      <div>
        <h3>
          To Do:
        </h3>
        
        <ol className={styles.todo}>
          <li>
            Add to change user name
          </li>

          <li>
            Add to change user password
          </li>

          <li>
            Add to change user avatar
          </li>

          <li>
            Add to change user about
          </li>

          <li>
            Add to change user wallpaper
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Settings;
