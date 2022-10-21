import React from 'react';
import UserInfoContainer from './components/UserInfo/UserInfoContainer';
import NewPostContainer from './components/NewPost/NewPostContainer';
import UserPostsContainer from './components/UserPosts/UserPostsContainer';

const Profile = () => {
  return (
    <section>
      <UserInfoContainer />
      
      <div>
        <NewPostContainer/>
        <UserPostsContainer />
      </div>
    </section>
  );
};

export default Profile;
