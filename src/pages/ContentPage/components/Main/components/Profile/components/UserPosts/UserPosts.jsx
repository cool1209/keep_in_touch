import React from 'react';
import Post from '../../../../../../../shared/Post/Post';
import styles from './UserPosts.module.css';

const UserPosts = ({ userPosts }) => {
  return (
    <article className={styles.wrapper}>
      {userPosts.length > 0 &&
        <h3 className={styles.title}>
          All my publications:
        </h3>
      }

      <div className={styles.inner}>
        {userPosts.map(post => (
          <div className={styles.post} key={post.id}>
            <Post post={post}/>
          </div>
        ))}       
      </div>
    </article>
  );
};

export default UserPosts;
