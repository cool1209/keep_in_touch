import React from 'react';
import s from './NewPublication.module.css';

const NewPublication = ({
  newPublicationText,
  user,
  onUpdatePublicationText,
  onAddPublication
}) => {
  return (
    <section className={s.userNewPublication}>
      <h3 className={s.userNewPublication__title}>
        Add a new publication:
      </h3>

      <textarea
        className={s.userNewPublication__textarea}
        onChange={(e) => onUpdatePublicationText(e.target.value)}
        placeholder='Write a publication...'
        value={newPublicationText}
      />
      
      <button
        className={s.userNewPublication__button}
        onClick={() => onAddPublication(user.id)}
      >
        Add puplication
      </button>
    </section>
  );
};

export default NewPublication;
