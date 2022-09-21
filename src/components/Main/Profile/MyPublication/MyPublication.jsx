import React from 'react';
import styles from './MyPublication.module.css';
import store from '../../../../store/store';

const { addPublication, updatePublicationText } = store;

const publicationInput = React.createRef();

const MyPublication = ({ newPublicationText }) => {
  const sendPuplication = () => {
    addPublication(newPublicationText);
  }

  const onChangePuplicationText = () => {
    const text = publicationInput.current.value;
    updatePublicationText(text);
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
