import React from 'react';
import LogoutButton from './components/LogoutButton/LogoutButtonContainer';
import UserInfo from './components/UserInfo/UserInfoContainer';
import NewPost from './components/NewPost/NewPostContainer';
import UserPosts from './components/UserPosts/UserPostsContainer';

const Profile = ({ isAuthUser }) => {

  return (
    <section>
      <UserInfo />

      {isAuthUser &&
        <>
          <LogoutButton />
          <NewPost/>
        </>
      }

      <UserPosts />
    </section>
  );
};

export default Profile;
