import React from 'react';

import LogoutButtonContainer from './LogoutButton/LogoutButtonContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import NewPost from './NewPost/NewPost';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import styles from './Profile.module.scss';

const Profile = ({ isAuthUserProfile }) => {

  return (
    <section className={styles.profile}>
      <ProfileInfoContainer />

      {isAuthUserProfile &&
        <>
          <LogoutButtonContainer />
          <NewPost/>
        </>
      }

      <ProfilePostsContainer />
    </section>
  );
};

export default Profile;
