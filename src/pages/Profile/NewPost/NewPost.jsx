import React from 'react';

import styles from './NewPost.module.scss';
import NewPostFormContainer from './NewPostForm/NewPostFormContainer';

const NewPost = () => {
  return (
    <section className={styles.newPost}>
      <h3 className={styles.newPost__title}>
        Add a new post:
      </h3>

      <NewPostFormContainer />
    </section>
  );
};

export default NewPost;
