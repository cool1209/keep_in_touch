import { connect } from 'react-redux';
import { setUserAC } from '../../store/reducers/usersReducer';
import StartPage from './LoginPage';

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setUserAC(user));
  }
});

const LoginPageContainer = connect(null, mapDispatchToProps)(StartPage);

export default LoginPageContainer;
