import { connect } from 'react-redux';
import { useState } from 'react';
import { compose } from 'redux';

import { loginUser } from '../../../store/reducers/authReducer'
import AuthForm from './AuthForm';

const AuthFormContainer = ({ loginUser }) => {
  const [form, setForm] = useState({
    login: '',
    password: '',
    remember: false
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    loginUser(form);
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

export default compose(
  connect(mapStateToProps, {loginUser}),
)(AuthFormContainer);
