import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <h1>
        Home page under development...
      </h1>

      <div>
        <h3>
          To Do:
        </h3>
        
        <ol className={styles.todo}>
          <li>
            Add welcome content
          </li>

          <li>
            Add to sign in
          </li>

          <li>
            Add to sign up
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
