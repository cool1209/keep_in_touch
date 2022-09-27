import React from 'react';
import styles from './MyPublication.module.css';
import store, { addPublicationCreator, updatePublicationTextCreator } from '../../../../store/store';

const MyPublication = ({ newPublicationText }) => {
  const onAddPuplication = () => {
    store.dispatch(addPublicationCreator());
  }

  const onChangePuplicationText = (event) => {
    const text = event.target.value;

    store.dispatch(updatePublicationTextCreator(text));
  }

  return (
    <section>
      <h2 className={styles.title}>
        My publication:
      </h2>

      <textarea
        className={styles.textarea}
        onChange={onChangePuplicationText}
        placeholder='New post...'
        value={newPublicationText}
      />
      
      <button
        className={styles.button}
        onClick={onAddPuplication}
      >
        Add puplication
      </button>
    </section>
  );
};

export default MyPublication;
