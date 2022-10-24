import server from '../../backend/server/server';
import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthorizedUser } from '../../store/reducers/userReducer';
import LoginPage from './LoginPage';

const LoginPageContainer = ({ setAuthorizedUser }) => {
  const [login, setLogin] = useState('');
  const [curentPage, setCurentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pages = [1, 2, 3, 4, 5];
  const users = server.getLoginUsers(curentPage);

  const loginUser = (login) => {
    setIsLoading(true);
    server.get(`server/api/login?user=${login}`)
    .then(user => {
      setAuthorizedUser(user);
    })
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
  authorizedUser: state.user.authorizedUser,
});

export default connect(
  mapStateToProps,
  {setAuthorizedUser}
)(LoginPageContainer);
