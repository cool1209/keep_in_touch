import React from "react";

import styles from "./NewPostForm.module.scss";

const NewPostForm = ({
  newPostText,
  onHandlePostText,
  onHandlePostForm
}) => {
  return (
    <form className={styles.newPostForm} onSubmit={onHandlePostForm}>
      <textarea
        className={styles.newPostForm__textarea}
        name="newPostText"
        placeholder="Write a new post..."
        value={newPostText}
        onChange={onHandlePostText}
      />

      <button
        className={styles.newPostForm__button}
        type='submit'
      >
        Add post
      </button>
    </form>
  );
};

export default NewPostForm;
