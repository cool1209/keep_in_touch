import server from '../../backend/server/server';
import { connect } from 'react-redux';
import { useState } from 'react';
import { setUserAC } from '../../store/reducers/loginUserReducer';
import LoginPage from './LoginPage';
import Preloader from '../shared/Preloader/Preloader';

const LoginPageContainer = ({ setUser, currentUser }) => {
  const [login, setLogin] = useState('');
  const [curentPage, setCurentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pages = [1, 2, 3, 4, 5];
  const users = server.getLoginUsers(curentPage);

  const loginUser = (login) => {
    setIsLoading(!isLoading)
    server.get(`server/api/login?user=${login}`)
    .then(user => {
      setUser(user);
    })
  }


  const getIsLoading = () => {
    if (!currentUser.id) {
      return <Preloader />
    }
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
      getIsLoading={getIsLoading}
      setIsLoading={setIsLoading}
    />
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.loginUser.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setUserAC(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageContainer);
