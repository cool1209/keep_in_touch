import React from 'react';
import styles from './MyPublication.module.css';
import { addPublicationCreator, updatePublicationTextCreator } from '../../../../store/store';

const MyPublication = ({ newPublicationText, dispatch }) => {
  return (
    <section>
      <h2 className={styles.title}>
        My publication:
      </h2>

      <textarea
        className={styles.textarea}
        onChange={(event) => {
          dispatch(updatePublicationTextCreator(event.target.value))
        }}
        placeholder='New post...'
        value={newPublicationText}
      />
      
      <button
        className={styles.button}
        onClick={() => dispatch(addPublicationCreator())}
      >
        Add puplication
      </button>
    </section>
  );
};

export default MyPublication;
