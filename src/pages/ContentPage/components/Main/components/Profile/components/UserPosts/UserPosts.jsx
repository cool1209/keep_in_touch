import server from '../../../../../../../../backend/server/server';
import React, { useEffect } from 'react';
import UserPost from './UserPost/UserPost';
import UserPostsStyles from './UserPosts.module.css';

const UserPosts = ({
  posts,
  setUserPosts,
  user
}) => {

  useEffect(() => {
    server.get('server/api/user-posts?user-id=' + user.id)
    .then(posts => {
      setUserPosts(posts.items);
    })
  }, []);

  return (
    <section className={UserPostsStyles.wrapper}>
      <h3 className={UserPostsStyles.title}>
        All my publications:
      </h3>

      <div className={UserPostsStyles.inner}>
        {posts.map(post => (
          <UserPost key={post.id} post={post}/>
        ))}       
      </div>
    </section>
  );
};

export default UserPosts;
