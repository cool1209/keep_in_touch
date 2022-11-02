import React from 'react';
import LogoutButtonContainer from './components/LogoutButton/LogoutButtonContainer';
import UserInfoContainer from './components/UserInfo/UserInfoContainer';
import NewPostContainer from './components/NewPost/NewPostContainer';
import UserPostsContainer from './components/UserPosts/UserPostsContainer';

const Profile = ({ isAuthUserProfile }) => {

  return (
    <section>
      <UserInfoContainer />

      {isAuthUserProfile &&
        <>
          <LogoutButtonContainer />
          <NewPostContainer/>
        </>
      }

      <UserPostsContainer />
    </section>
  );
};

export default Profile;
