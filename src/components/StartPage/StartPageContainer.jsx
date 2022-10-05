import { connect } from 'react-redux';
import { getCurentUserCreator } from '../../store/reducers/usersReducer';
import StartPage from './StartPage';

const mapStateToProps = (state) => ({
  users: state.users.allUsers
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (id) => (
    dispatch(getCurentUserCreator(id))
  )
});

const StartPageContainer = connect(mapStateToProps, mapDispatchToProps)(StartPage);

export default StartPageContainer;
