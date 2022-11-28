import { connect } from 'react-redux';
import { compose } from 'redux';

import { userAuth } from '../../../store/reducers/authReducer'
import AuthForm from './AuthForm';

const AuthFormContainer = ({ userAuth }) => {

  const onSubmit = (e) => {
    userAuth(e);
  }

  const required = value => value ? undefined : true;

  return (
    <AuthForm
      onSubmit={onSubmit}
      required={required}
    />
  );
};

const mapStateToDispatch = {
  userAuth
};

export default compose(
  connect(null, mapStateToDispatch),
)(AuthFormContainer);
