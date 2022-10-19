import React from 'react';
import Post from '../../../../../../../shared/Post/Post';
import UserPostsStyles from './UserPosts.module.css';

const UserPosts = ({ posts }) => {
  return (
    <article className={UserPostsStyles.wrapper}>
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
  );
};

export default UserPosts;
