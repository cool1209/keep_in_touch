import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Dialog from './Dialog';
import { getAuthUser } from '../../../../store/selectors/authSelectors';

const DialogContainer = ({ dialog,authUser }) => {
  return (
    <Dialog
      authUser={authUser}
      dialog={dialog}
    />
  );
};

const mapStatetoProps =(state) => ({
  authUser: getAuthUser(state),
});

export default compose(
  connect(mapStatetoProps)
)(DialogContainer);
