import React from 'react';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';
import HomeStyles from './Home.module.css';
import Post from '../../../../../shared/Post/Post';

const Home = ({ posts, setPosts }) => {
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
