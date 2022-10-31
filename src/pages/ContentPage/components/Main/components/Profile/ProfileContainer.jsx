import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentUser } from '../../../../../../store/reducers/profileReducer';
import Preloader from '../../../../../shared/Preloader/Preloader';
import Profile from './Profile';
import { getUserPosts } from '../../../../../../store/reducers/postsReducer';

const ProfileContainer = ({
  authUser,
  isCurrentUser,
  getCurrentUser,
  getUserPosts
}) => {
  const params = useParams();
  const currentUserId = +params.userId;
  const isAuthUser = currentUserId === authUser.id;

  const setProfile = () => {
    getCurrentUser(currentUserId, authUser);
    getUserPosts(currentUserId);
  };

  useEffect(() => {
    setProfile();
  }, [currentUserId]);

  return (
    <>
      {isCurrentUser
      ? <Profile isAuthUser={isAuthUser} />
      : <Preloader />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
  isCurrentUser: state.user.currentUser.id
});

export default connect(
  mapStateToProps,
  {
    getCurrentUser,
    getUserPosts
  }
)(ProfileContainer)
