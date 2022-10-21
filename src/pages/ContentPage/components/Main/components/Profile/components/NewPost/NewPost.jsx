import React from 'react';
import NewPostStyles from './NewPost.module.css';

const NewPost = ({
  newPostText,
  user,
  updatePostText,
  addNewPost
}) => {
  return (
    <section className={NewPostStyles.wrapper}>
      <h3 className={NewPostStyles.title}>
        Add a new post:
      </h3>

      <textarea
        className={NewPostStyles.textarea}
        onChange={(e) => updatePostText(e.target.value)}
        placeholder='Write a new post...'
        value={newPostText}
      />
      
      <button
        className={NewPostStyles.button}
        onClick={() => addNewPost(user.id, user.avatar)}
      >
        Add post
      </button>
    </section>
  );
};

export default NewPost;
