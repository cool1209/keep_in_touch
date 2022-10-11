import { connect } from 'react-redux';
import { loginUserAC } from '../../store/reducers/usersReducer';
import StartPage from './LoginPage';

const mapDispatchToProps = (dispatch) => ({
  onLoginUser: (login) => (
    dispatch(loginUserAC(login))
  )
});

const LoginPageContainer = connect(null, mapDispatchToProps)(StartPage);

export default LoginPageContainer;
