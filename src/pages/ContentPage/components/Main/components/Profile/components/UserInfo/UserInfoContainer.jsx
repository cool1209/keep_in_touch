import { connect } from 'react-redux';
import { setDialogsAC } from '../../../../../../../../store/reducers/dialogsReducer';
import { setPublicationsAC } from '../../../../../../../../store/reducers/publicationsReducer';
import { setUserAC } from '../../../../../../../../store/reducers/usersReducer';
import UserInfo from './UserInfo';


const mapStateToProps = (state) => ({
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: () => {
    dispatch(setUserAC({}));
    dispatch(setPublicationsAC([]));
    dispatch(setDialogsAC([]));
  }
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
  
export default UserInfoContainer;
