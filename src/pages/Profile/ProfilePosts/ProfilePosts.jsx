import React from 'react';
import Post from '../../../shared/Post/Post';
import styles from './ProfilePosts.module.scss';

const ProfilePosts = ({ isAuthUserProfile, profilePosts }) => {
  const isProfilePosts = profilePosts.length > 0;
  let authorName;

  if (isProfilePosts) {
    authorName = profilePosts[0].author;
  }

  return (
    <>
      {isProfilePosts &&
        <section className={styles.posts}>
            <h3 className={styles.posts__title}>
              All {isAuthUserProfile ? 'my' : authorName + '\'s'} publications:
            </h3>

          <div className={styles.posts__inner}>
            {profilePosts.map(post => (
              <div className={styles.posts__post} key={post.id}>
                <Post post={post}/>
              </div>
            ))}       
          </div>
        </section>
      }
    </>
  );
};

export default ProfilePosts;
