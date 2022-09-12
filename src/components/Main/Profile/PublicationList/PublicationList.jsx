import React from 'react';
import Publication from './Publication/Publication';
import styles from './PublicationList.module.css';

const PublicationList = ({ publications }) => {
  return (
    <section>
      <h2 className={styles.title}>
        All publications:
      </h2>

      {publications.map(publication => (
        <Publication
          publication={publication.publication}
          likes={publication.likes1}
        />
      ))}
    </section>
  );
};

export default PublicationList;
