import React from 'react';
import styles from './UserNewPublication.module.css';

const UserNewPublication = ({
  newPublicationText,
  user,
  onUpdatePublicationText,
  onAddPublication
}) => {
  console.log(newPublicationText);
  return (
    <section className={styles.userNewPublication}>
      <h2 className={styles.userNewPublication__title}>
        New publication:
      </h2>

      <textarea
        className={styles.userNewPublication__textarea}
        onChange={(e) => onUpdatePublicationText(e.target.value)}
        placeholder='Write a publication...'
        value={newPublicationText}
      />
      
      <button
        className={styles.userNewPublication__button}
        onClick={() => onAddPublication(user.id)}
      >
        Add puplication
      </button>
    </section>
  );
};

export default UserNewPublication;
