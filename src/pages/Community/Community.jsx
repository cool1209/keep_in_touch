import React from 'react';
import { GetImg } from '../../assets/img/GetImg';
import styles from './Community.module.scss';

const Community = () => {
  return (
    <div className={styles.community}>
      <h1 className={styles.community__title}>
        Community page
      </h1>

      <div className={styles.community__imgContainer}>
        <GetImg id='note' />
      </div>
    </div>

  );
};

export default Community;
