import { connect } from 'react-redux';
import { useState } from 'react';
import { openAuthUserSession } from '../../store/reducers/authReducer';
import { authAPI } from '../../api/api';
import LoginPage from './LoginPage';

const LoginPageContainer = ({ openAuthUserSession, isLoading }) => {
  const [login, setLogin] = useState('');
  const [curentPage, setCurentPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];
  const users = authAPI.getUsersForAuth(curentPage);
  const getAuthUser = login => openAuthUserSession(login);

  return (
    <LoginPage 
      users={users}
      login={login}
      onSetLogin={setLogin}
      onGetAuthUser={getAuthUser}
      curentPage={curentPage}
      pages={pages}
      onSetCurentPage={setCurentPage}
      isLoading={isLoading}
    />
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
  isLoading: state.auth.isLoadingProcess
});

export default connect(
  mapStateToProps,
  {openAuthUserSession}
)(LoginPageContainer);
