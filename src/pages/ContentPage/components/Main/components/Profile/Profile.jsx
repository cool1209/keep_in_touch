import React from 'react';
import ProfileStyles from './Profile.module.css';

import UserInfoContainer from './components/UserInfo/UserInfoContainer';
import NewPostContainer from './components/NewPost/NewPostContainer';
import PostsContainer from './components/Posts/PostsContainer';

const Profile = () => {
  return (
    <section className={ProfileStyles.wrapper}>
      <UserInfoContainer />
      
      <div className={ProfileStyles.posts}>
        <NewPostContainer/>
        <PostsContainer />
      </div>
    </section>
  );
};

export default Profile;
