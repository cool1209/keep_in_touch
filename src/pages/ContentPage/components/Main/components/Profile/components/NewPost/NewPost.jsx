import React from 'react';
import styles from './NewPost.module.css';

const NewPost = ({
  newPostText,
  updatePostText,
  onSendNewPost
}) => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>
        Add a new post:
      </h3>

      <textarea
        className={styles.textarea}
        onChange={(e) => updatePostText(e.target.value)}
        placeholder='Write a new post...'
        value={newPostText}
      />
      
      <button
        className={styles.button}
        onClick={onSendNewPost}
      >
        Add post
      </button>
    </section>
  );
};

export default NewPost;
