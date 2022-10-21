import React from 'react';
import HomeStyles from './Home.module.css';
import Post from '../../../../../shared/Post/Post';
import Preloader from '../../../../../shared/Preloader/Preloader';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';

const Home = ({ posts, isPosts }) => {
  return (
    <div className={HomeStyles.wrapper}>
      {isPosts === null
      ? <Preloader />

      : posts.length 
        ? <div className={HomeStyles.posts}>
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>

        : <WithNoData message={'There are no posts...'} />
      }
    </div>
  );
};

export default Home;
