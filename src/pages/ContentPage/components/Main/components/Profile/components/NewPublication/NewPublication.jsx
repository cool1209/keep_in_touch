import React from 'react';
import styles from './NewPublication.module.css';

const NewPublication = ({
  newPublicationText,
  user,
  onUpdatePublicationText,
  onAddPublication
}) => {
  return (
    <section className={styles.userNewPublication}>
      <h3 className={styles.userNewPublication__title}>
        Add a new publication:
      </h3>

      <textarea
        className={styles.userNewPublication__textarea}
        onChange={(e) => onUpdatePublicationText(e.target.value)}
        placeholder='Write a publication...'
        value={newPublicationText}
      />
      
      <button
        className={styles.userNewPublication__button}
        onClick={() => onAddPublication(user.id, user.avatar)}
      >
        Add puplication
      </button>
    </section>
  );
};

export default NewPublication;
