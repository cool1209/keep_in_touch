import React from 'react';
import ProfileStyles from './Profile.module.css';

import UserInfoContainer from './components/UserInfo/UserInfoContainer';
import NewPostContainer from './components/NewPost/NewPostContainer';
import UserPostsContainer from './components/UserPosts/UserPostsContainer';

const Profile = () => {
  return (
    <section className={ProfileStyles.wrapper}>
      <UserInfoContainer />
      
      <div className={ProfileStyles.posts}>
        <NewPostContainer/>
        <UserPostsContainer />
      </div>
    </section>
  );
};

export default Profile;
