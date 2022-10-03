import React from 'react';
import styles from './CurrentUserPublication.module.css';
import {
  addPublicationCreator,
  updatePublicationTextCreator
} from '../../../../../store/reducers/publicationsReducer';

const CurrentUserPublication = ({ newPublicationText, user, store }) => {
  return (
    <section className={styles.currentUserPublication}>
      <h2 className={styles.currentUserPublication__title}>
        My publication:
      </h2>

      <textarea
        className={styles.currentUserPublication__textarea}
        onChange={(event) => {
          store.dispatch(updatePublicationTextCreator(event.target.value))
        }}
        placeholder='New post...'
        value={newPublicationText}
      />
      
      <button
        className={styles.currentUserPublication__button}
        onClick={() => store.dispatch(addPublicationCreator(user.id))}
      >
        Add puplication
      </button>
    </section>
  );
};

export default CurrentUserPublication;
