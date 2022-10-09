import { connect } from 'react-redux';
import { loginUserAC } from '../../store/reducers/usersReducer';
import StartPage from './LoginPage';

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  onLoginUser: (id) => (
    dispatch(loginUserAC(id))
  )
});

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(StartPage);

export default LoginPageContainer;
