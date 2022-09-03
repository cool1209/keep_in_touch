import React from 'react';
import Publication from './Publication/Publication';
import styles from './PublicationList.module.css';

const PublicationList = () => {
  return (
    <section>
      <h2 className={styles.title}>
        All publications:
      </h2>

      <Publication />
      <Publication />
      <Publication />
      <Publication />
    </section>
  );
};

export default PublicationList;
