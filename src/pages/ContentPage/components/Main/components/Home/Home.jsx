import React, { useEffect } from 'react';
import server from '../../../../../../backend/server/server';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';
import HomeStyles from './Home.module.css';
import Post from './Post/Post';

const Home = ({ posts, setPosts }) => {
  useEffect(() => {
    server.get('server/api/posts')
    .then((posts) => {
      setPosts(posts.items);
    });
  }, []);

  return (
    <div className={HomeStyles.wrapper}>
      {posts.length
      ? <div className={HomeStyles.posts}>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>

      : <WithNoData message={'Publications is loading...'} />
      }
    </div>
  );
};

export default Home;
