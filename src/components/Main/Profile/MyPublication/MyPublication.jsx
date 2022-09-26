import React from 'react';
import styles from './MyPublication.module.css';
import store, { addPublication, updatePublicationText } from '../../../../store/store';

const MyPublication = ({ newPublicationText }) => {
  const publicationInput = React.createRef();

  const sendPuplication = () => {
    store.dispatch(addPublication());
  }

  const onChangePuplicationText = () => {
    const text = publicationInput.current.value;

    store.dispatch(updatePublicationText(text));
  }

  return (
    <section>
      <h2 className={styles.title}>
        My publication:
      </h2>

      <textarea
        ref={publicationInput}
        className={styles.textarea}
        onChange={onChangePuplicationText}
        placeholder='New post...'
        value={newPublicationText}
      />
      
      <button
        className={styles.button}
        onClick={sendPuplication}
      >
        Add puplication
      </button>
    </section>
  );
};

export default MyPublication;
