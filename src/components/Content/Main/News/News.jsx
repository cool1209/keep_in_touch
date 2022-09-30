import React from 'react';
import styles from './News.module.css';

const News = () => {
  return (
    <div className={styles.news}>
      <h1>News page</h1>
      <h3> under development...</h3>

      <div>
        <h4  className={styles.todo}>
          To Do:
        </h4>
        
        <ol>
          <li>
            Add to all publications
          </li>
        </ol>
      </div>
    </div>
  );
};

export default News;
