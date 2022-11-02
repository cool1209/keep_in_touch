import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getProfile,
  setIsAuthUserProfile,
  getProfileStatus
} from '../../../../../../store/reducers/profileReducer';
import Preloader from '../../../../../shared/Preloader/Preloader';
import Profile from './Profile';
import { getProfilePosts } from '../../../../../../store/reducers/postsReducer';
import { compose } from 'redux';

const ProfileContainer = ({
  authUser,
  isProfile,
  getProfile,
  getProfilePosts,
  setIsAuthUserProfile,
  getProfileStatus
}) => {
  const params = useParams();
  const profileId = +params.userId;
  const isAuthUserProfile = profileId === authUser.id;

  const setProfile = () => {
    setIsAuthUserProfile(isAuthUserProfile);
    getProfile(profileId);
    getProfileStatus(profileId);
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
  authUser: state.auth.authUser,
  isProfile: state.profile.profile.id
});

export default compose(
  connect(
    mapStateToProps,
    {getProfile, getProfilePosts, setIsAuthUserProfile, getProfileStatus})
)(ProfileContainer);
