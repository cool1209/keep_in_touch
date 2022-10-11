import React from 'react';
import styles from './IsLoading.module.css';

const IsLoading = ({ text }) => {
  return (
    <h2 className={styles.isLoading}>
      {text}
    </h2>
  );
};

export default IsLoading;
