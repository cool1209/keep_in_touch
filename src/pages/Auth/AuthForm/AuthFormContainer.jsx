import { connect } from 'react-redux';
import { useState } from 'react';
import { compose } from 'redux';

import { userAuth } from '../../../store/reducers/authReducer'
import AuthForm from './AuthForm';

const AuthFormContainer = ({ userAuth }) => {
  const [form, setForm] = useState({
    login: '',
    password: '',
    remember: false
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    userAuth(form);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const handledValue = type === 'checkbox' ? checked : value;
    
    setForm({
      ...form, 
      [name]: handledValue
    })
  }

  return (
    <AuthForm
      form={form}
      onHandleChange={handleChange}
      onHandleFormSubmit={handleFormSubmit}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoadingProcess
});

const mapStateToDispatch = {
  userAuth
};

export default compose(
  connect(mapStateToProps, mapStateToDispatch),
)(AuthFormContainer);
