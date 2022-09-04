import React from 'react';
import styles from './MyPublication.module.css'

const MyPublication = () => {
  return (
    <section>
      <h2 className={styles.title}>
        My publication:
      </h2>

      <textarea
      className={styles.textarea}
      placeholder='New post...'
      ></textarea>
      
      <button
        className={styles.button}
      >
        Add puplication
      </button>
    </section>
  );
};

export default MyPublication;
