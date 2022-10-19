import { connect } from 'react-redux';
import { useState } from 'react';
import server from '../../backend/server/server';
import { setUserAC } from '../../store/reducers/loginUserReducer';
import LoginPage from './LoginPage';

const LoginPageContainer = ({ setUser }) => {
  const [login, setLogin] = useState('');
  const [curentPage, setCurentPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];
  const users = server.getLoginUsers(curentPage);

  const loginUser = (login) => {
    server.get(`server/api/login?user=${login}`)
    .then(user => {
      setUser(user);
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
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setUserAC(user));
  }
});

export default connect(null, mapDispatchToProps)(LoginPageContainer);
