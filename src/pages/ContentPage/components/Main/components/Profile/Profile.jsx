import React from 'react';
import UserLogoutButtonContainer from './components/UserLogoutButton/UserLogoutButtonContainer';
import UserInfoContainer from './components/UserInfo/UserInfoContainer';
import NewPostContainer from './components/NewPost/NewPostContainer';
import UserPostsContainer from './components/UserPosts/UserPostsContainer';

const Profile = ({ isAuthUser }) => {

  return (
    <section>
      <UserInfoContainer />

      {isAuthUser &&
        <>
          <UserLogoutButtonContainer />
          <NewPostContainer/>
        </>
      }

      <UserPostsContainer />
    </section>
  );
};

export default Profile;
