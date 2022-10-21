import React from 'react';
import Post from '../../../../../../../shared/Post/Post';
import Preloader from '../../../../../../../shared/Preloader/Preloader';
import UserPostsStyles from './UserPosts.module.css';

const UserPosts = ({ posts, isPosts }) => {
  return (
    <>
      {posts.length
      ? <article className={UserPostsStyles.wrapper}>
          <h3 className={UserPostsStyles.title}>
            All my publications:
          </h3>
    
          <div className={UserPostsStyles.inner}>
            {posts.map(post => (
              <div className={UserPostsStyles.post} key={post.id}>
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
