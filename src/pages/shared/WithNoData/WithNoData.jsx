import React from 'react';
import styles from './WithNoData.module.css';

const WithNoData = ({ message }) => {
  return (
    <h2 className={styles.isLoading}>
      {message}
    </h2>
  );
};

export default WithNoData;
