import React from 'react';
import styles from './News.module.css';

const News = () => {
  return (
    <div  className={styles.news}>
      <h1>
        News page under development...
      </h1>

      <div>
        <h3>
          To Do:
        </h3>

        <ol className={styles.todo}>
          <li>
            Add all publications
          </li>
        </ol>
      </div>
    </div>
  );
};

export default News;
