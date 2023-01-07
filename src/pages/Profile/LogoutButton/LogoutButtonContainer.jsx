import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import resetState from '../../../store/functions/resetState';
import LogoutButton from './LogoutButton';

const LogoutButtonContainer = ({ resetState }) => {
  return (
    <LogoutButton onLogoutUser={resetState} />
  );
};

const mapStateToDispatch = {
  resetState
}

export default compose(
  connect(null, mapStateToDispatch)
)(LogoutButtonContainer);
