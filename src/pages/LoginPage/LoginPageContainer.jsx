import { connect } from 'react-redux';
import { loginUserAC } from '../../store/reducers/loginUserReducer';
import { setDialogsAC } from '../../store/reducers/dialogsReducer'; 
import { setUsersAC } from '../../store/reducers/usersReducer';
import { setPublicationsAC } from '../../store/reducers/publicationsReducer';
import StartPage from './LoginPage';

const mapDispatchToProps = (dispatch) => ({
  onLoginUser: (login) => {
    dispatch(loginUserAC(login));
    dispatch(setPublicationsAC());
    dispatch(setDialogsAC());
    dispatch(setUsersAC());
  }
});

const LoginPageContainer = connect(null, mapDispatchToProps)(StartPage);

export default LoginPageContainer;
