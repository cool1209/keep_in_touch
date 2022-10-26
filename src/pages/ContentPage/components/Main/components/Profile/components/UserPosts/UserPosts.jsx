import React from 'react';
import Post from '../../../../../../../shared/Post/Post';
import Preloader from '../../../../../../../shared/Preloader/Preloader';
import styles from './UserPosts.module.css';

const UserPosts = ({ posts, isPosts }) => {
  return (
    <>
      {posts.length
      ? <article className={styles.wrapper}>
          <h3 className={styles.title}>
            All my publications:
          </h3>
    
          <div className={styles.inner}>
            {posts.map(post => (
              <div className={styles.post} key={post.id}>
                <Post post={post}/>
              </div>
            ))}       
          </div>
        </article>

      : isPosts === null && <Preloader />
      }
    </>
  );
};

export default UserPosts;
