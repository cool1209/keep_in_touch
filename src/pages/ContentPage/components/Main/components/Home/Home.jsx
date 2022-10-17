import React, { useEffect } from 'react';
import server from '../../../../../../backend/server';
import GetIcon from '../../../../../../img/GetIcon';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';
import HomeStyles from './Home.module.css';

const Home = ({ posts, setPosts }) => {
  useEffect(() => {
    server.get('server/api/posts')
    .then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className={HomeStyles.wrapper}>
      {posts.length
      ? <ul className={HomeStyles.posts}>
          {posts.map(post => (
            <li
              className={HomeStyles.post}
              key={post.id}
            > 
              <div>
                <img 
                  src={post.authorAvatar}
                  alt='Publication author avatar'
                  className={HomeStyles.postAuthorAvatar}
                />

                <button className={HomeStyles.likeBtn}>
                  <span className={HomeStyles.likeIcon}>
                    <GetIcon id='like-icon' />
                  </span>

                  <span className={HomeStyles.likesCounter}>
                    {post.likes}
                  </span>
                </button>
              </div>

              <div className={HomeStyles.postText}>
                <h3 className={HomeStyles.postAuthor}>
                  {post.author}:
                </h3>

                <p>
                  {post.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

      : <WithNoData message={'Publications is loading...'} />
      }
    </div>
  );
};

export default Home;
