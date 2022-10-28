import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthUser } from '../../store/reducers/authReducer';
import LoginPage from './LoginPage';
import { openAuth, getUsersForAuth } from '../../api/api';

const LoginPageContainer = ({ setAuthUser }) => {
  const [login, setLogin] = useState('');
  const [curentPage, setCurentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pages = [1, 2, 3, 4, 5];
  const users = getUsersForAuth(curentPage);

  const loginUser = (login) => {
    setIsLoading(true);
    openAuth(login).then(user => {setAuthUser(user)});
  }

  return (
    <LoginPage 
      users={users}
      login={login}
      onSetLogin={setLogin}
      onLoginUser={loginUser}
      curentPage={curentPage}
      pages={pages}
      onSetCurentPage={setCurentPage}
      isLoading={isLoading}
    />
  );
};

const mapStateToProps = (state) => ({
  authUser: state.user.authUser,
});

export default connect(
  mapStateToProps,
  {setAuthUser}
)(LoginPageContainer);
