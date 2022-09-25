import React from 'react';
import styles from './MyPublication.module.css';
import store from '../../../../store/store';

const MyPublication = ({ newPublicationText }) => {
  const publicationInput = React.createRef();

  const sendPuplication = () => {
    store.dispatch({ type: 'ADD-PUBLICATION' });
  }

  const onChangePuplicationText = () => {
    const text = publicationInput.current.value;

    store.dispatch({ type: 'UPDATE-PUBLICATION-TEXT', payload: text });
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
