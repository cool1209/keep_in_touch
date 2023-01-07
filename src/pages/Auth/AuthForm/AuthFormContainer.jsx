import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchUserAuth } from '../../../store/reducers/authReducer'
import AuthForm from './AuthForm';

const AuthFormContainer = ({ fetchUserAuth }) => {

  const onSubmit = (e) => {
    fetchUserAuth(e);
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
  fetchUserAuth
};

export default compose(
  connect(null, mapStateToDispatch),
)(AuthFormContainer);
