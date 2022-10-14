import UserInfo from './UserInfo';
import { connect } from 'react-redux';
import { setDialogsAC } from '../../../../../../../../store/reducers/dialogsReducer';
import { setPublicationsAC } from '../../../../../../../../store/reducers/publicationsReducer';
import {
  resetRequiredUsersPageAC,
  setUserAC,
  setUsersAC
} from '../../../../../../../../store/reducers/usersReducer';


const mapStateToProps = (state) => ({
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: () => {
    dispatch(setUserAC({}));
    dispatch(setUsersAC([]));
    dispatch(resetRequiredUsersPageAC([]));
    dispatch(setPublicationsAC([]));
    dispatch(setDialogsAC([]));
  }
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
  
export default UserInfoContainer;
