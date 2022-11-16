import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Dialog from './Dialog';

const DialogContainer = ({
  dialog,
  authUser
}) => {
  return (
    <Dialog
      authUser={authUser}
      dialog={dialog}
    />
  );
};

const mapStatetoProps =(state) => ({
  authUser: state.auth.authUser,
});

export default compose(
  connect(mapStatetoProps)
)(DialogContainer);
