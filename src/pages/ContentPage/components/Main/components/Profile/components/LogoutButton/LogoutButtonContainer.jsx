import React from 'react';
import { connect } from 'react-redux';
import { closeAuthUserSession } from '../../../../../../../../store/reducers/authReducer';
import LogoutButton from './LogoutButton';

const LogoutButtonContainer = ({
  closeAuthUserSession,
  authUserId
}) => {
  return (
    <LogoutButton onLogoutUser={() => closeAuthUserSession(authUserId)} />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id
});

export default connect(
  mapStateToProps,
  {closeAuthUserSession}
)(LogoutButtonContainer);
