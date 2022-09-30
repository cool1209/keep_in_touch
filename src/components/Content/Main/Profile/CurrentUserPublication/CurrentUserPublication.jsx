import React from 'react';
import styles from './CurrentUserPublication.module.css';
import {
  addPublicationCreator,
  updatePublicationTextCreator
} from '../../../../../store/reducers/publicationsReducer';

const CurrentUserPublication = ({ newPublicationText, dispatch }) => {
  return (
    <section className={styles.currentUserPublication}>
      <h2 className={styles.currentUserPublication__title}>
        My publication:
      </h2>

      <textarea
        className={styles.currentUserPublication__textarea}
        onChange={(event) => {
          dispatch(updatePublicationTextCreator(event.target.value))
        }}
        placeholder='New post...'
        value={newPublicationText}
      />
      
      <button
        className={styles.currentUserPublication__button}
        onClick={() => dispatch(addPublicationCreator())}
      >
        Add puplication
      </button>
    </section>
  );
};

export default CurrentUserPublication;
