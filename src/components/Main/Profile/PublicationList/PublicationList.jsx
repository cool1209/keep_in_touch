import React from 'react';
import Publication from './Publication/Publication';
import styles from './PublicationList.module.css';

const message1 = 'It is my first publication and I don\'t know what I should write here but I thing this text is no bad :)';
const message2 = 'Iron Man is a superhero appearing in American comic books published by Marvel Comics.';
const message3 = 'The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.';

const likes1 = 2;
const likes2 = 8;
const likes3 = 11;

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

      <Publication publication={message1} likes={likes1} />
      <Publication publication={message2} likes={likes2} />
      <Publication publication={message3} likes={likes3} />
    </section>
  );
};

export default PublicationList;
