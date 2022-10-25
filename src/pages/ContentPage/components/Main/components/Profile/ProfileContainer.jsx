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
  authUser,
  currentUser,
  setCurrentUser,
  setUserPosts
}) => {

  const params = useParams();
  const userId = params.userId;
  const isAuthUser = +userId === authUser.id;

  const getCurrentUser = (id) => {
    server.get(`server/api/user?id=${id}`)
    .then(user => {
      setCurrentUser(user);
    })
  }

  useEffect(() => {
    if (isAuthUser) {
      setCurrentUser(authUser);
    } else {
      getCurrentUser(userId);
    }
    
    return () => {
      setCurrentUser({});
      setUserPosts([], null);
    }
  }, [userId]);

  return (
    <>
      {currentUser.id
      ? <Profile isAuthUser={isAuthUser} />
      : <Preloader />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  {
    setCurrentUser,
    setUserPosts
  }
)(ProfileContainer)
