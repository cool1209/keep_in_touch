import React from 'react';
import Publication from './Publication/Publication';
import styles from './PublicationList.module.css';

const message1 = 'It is my first publication and I don\'t know what I should write here but I thing this text is no bad :)';
const message2 = 'Iron Man is a superhero appearing in American comic books published by Marvel Comics.';
const message3 = 'The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.';
const message4 = 'The character made his first appearance in Tales of Suspense. Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.';

const likes1 = 2;
const likes2 = 8;
const likes3 = 11;
const likes4 = 7;

const PublicationList = () => {
  return (
    <section>
      <h2 className={styles.title}>
        All publications:
      </h2>

      <Publication message={message1} likes={likes1} />
      <Publication message={message2} likes={likes2} />
      <Publication message={message3} likes={likes3} />
      <Publication message={message4} likes={likes4} />
    </section>
  );
};

export default PublicationList;
