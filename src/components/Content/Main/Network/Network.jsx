import React from 'react';
import styles from './Network.module.css';

const Network = () => {
  return (
    <div className={styles.network}>
      <h1>Network page</h1>
      <h3> under development...</h3>

      <div>
        <h4  className={styles.todo}>
          To Do:
        </h4>
        
        <ol>
          <li>
            Add to search people
          </li>

          <li>
            Filter people by some parameters
          </li>

          <li>
            Add people to friends list
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Network;
