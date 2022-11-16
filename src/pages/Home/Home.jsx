import React from 'react';

import Post from '../../shared/Post/Post';
import Preloader from '../../shared/Preloader/Preloader';
import WithNoData from '../../shared/WithNoData/WithNoData';
import styles from './Home.module.scss';

const Home = ({ posts, isPosts }) => {
  return (
    <div className={styles.home}>
      {isPosts === null
      ? <Preloader />

      : posts.length 
        ? <div className={styles.home__posts}>
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
