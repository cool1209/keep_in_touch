import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

import {
  getOnlineStatus,
  getProfile,
  setIsAuthUserProfile
} from '../../store/reducers/profileReducer';
import { getProfilePosts } from '../../store/reducers/postsReducer';
import Preloader from '../../shared/Preloader/Preloader';
import Profile from './Profile';
import withLayout from '../../hocs/withLayout';
import withAuthUser from '../../hocs/withAuthUser';

const ProfileContainer = ({
  authUserId,
  isProfile,
  getProfile,
  getProfilePosts,
  setIsAuthUserProfile,
  getOnlineStatus
}) => {
  const params = useParams();
  const profileId = +params.userId;
  const isAuthUserProfile = profileId === authUserId;

  const setProfile = () => {
    setIsAuthUserProfile(isAuthUserProfile)
    getProfile(profileId);
    getOnlineStatus(profileId);
    getProfilePosts(profileId);
  };

  useEffect(() => {
    setProfile();
  }, [profileId]);

  return (
    <>
      {isProfile
        ? <Profile isAuthUserProfile={isAuthUserProfile} />
        : <Preloader />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id,
  isProfile: state.profile.profile.id
});

const mapStateToDispatch = {
  getProfile,
  getProfilePosts,
  setIsAuthUserProfile,
  getOnlineStatus
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(ProfileContainer);
