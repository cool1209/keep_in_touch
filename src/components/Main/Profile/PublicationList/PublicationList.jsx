import React from 'react';
import Publication from './Publication/Publication';
import styles from './PublicationList.module.css';

const PublicationList = () => {

  const publicationsData = [
    {
      id: 1,
      likes: 2,
      publication: 'It is my first publication and I don\'t know what I should write here but I thing this text is no bad :)',
      userId: 1,
    },
    {
      id: 2,
      likes: 2,
      publication: 'It is my first publication and I don\'t know what I should write here but I thing this text is no bad :)',
      userId: 1,
    },
    {
      id: 3,
      likes: 2,
      publication: 'It is my first publication and I don\'t know what I should write here but I thing this text is no bad :)',
      userId: 1,
    },
  ];

  return (
    <section>
      <h2 className={styles.title}>
        All publications:
      </h2>

      <Publication publication={publicationsData[0].publication} likes={publicationsData[0].likes1} />
      <Publication publication={publicationsData[1].publication} likes={publicationsData[1].likes1} />
      <Publication publication={publicationsData[2].publication} likes={publicationsData[2].likes1} />
    </section>
  );
};

export default PublicationList;
