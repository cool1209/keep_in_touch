import React, { useEffect } from 'react';
import server from '../../../../../../../../backend/server/server';
import GetIcon from '../../../../../../../../img/GetIcon';
import PostsStyles from './Posts.module.css';

const Posts = ({
  posts,
  setUserPosts,
  user
}) => {
  useEffect(() => {
    server.get('server/api/user-posts?user-id=' + user.id)
    .then(posts => {
      setUserPosts(posts);
    })
  }, []);

  return (
    <section className={PostsStyles.wrapper}>
      <h3 className={PostsStyles.title}>
        All my publications:
      </h3>

      <div className={PostsStyles.inner}>
        {posts.map(post => (
          <article
            className={`${PostsStyles.item} ${PostsStyles.post}`}
            key={post.id}
          >
            <div className={PostsStyles.post__userInfo}>
              <img 
                src={post.authorAvatar}
                alt='User avatar'
                className={PostsStyles.post__userAvatar}
              />

              <button className={PostsStyles.post__likeBtn}>
                <span className={PostsStyles.post__likeIcon}>
                  <GetIcon id='like-icon' />
                </span>

                <span className={PostsStyles.post__likesCounter}>
                  {post.likes}
                </span>
              </button>
            </div>
            
            <div className={PostsStyles.post__text}>
              {post.text}
            </div>
          </article>
        ))}       
      </div>
    </section>
  );
};

export default Posts;
