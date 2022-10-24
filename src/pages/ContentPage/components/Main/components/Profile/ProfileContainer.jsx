import server from '../../../../../../backend/server/server';

import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setCurrentUser } from '../../../../../../store/reducers/userReducer';
import { setUserPosts } from '../../../../../../store/reducers/postsReducer';
import Profile from './Profile';
import Preloader from '../../../../../shared/Preloader/Preloader';

const ProfileContainer = ({
  authorizedUser,
  currentUser,
  setCurrentUser,
  setUserPosts
}) => {

  const params = useParams();
  const userId = params.userId;
  const isAuthorizedUser = authorizedUser.id === currentUser.id;

  const getCurrentUser = (id) => {
    if (userId === authorizedUser.id) {
      setCurrentUser(authorizedUser);
    } else {
      server.get(`server/api/user?id=${id}`)
      .then(user => {
        setCurrentUser(user);
      })
    }
  }

  useEffect(() => {
    getCurrentUser(userId);

    return () => {
      setCurrentUser({});
      setUserPosts([], null);
    }
  }, [userId])

  return (
    <>
      {currentUser.id
      ? <Profile isAuthorizedUser={isAuthorizedUser} />
      : <Preloader />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authorizedUser: state.user.authorizedUser,
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  {
    setCurrentUser,
    setUserPosts
  }
)(ProfileContainer)
