import { connect } from "react-redux";
import { addUsersAC, setUsersAC } from "../../../../../../store/reducers/usersReducer";
import Network from "./Network";

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
  addUsers: (users) => {
    dispatch(addUsersAC(users));
  }
});

const NetworkContainer = connect(mapStateToProps, mapDispatchToProps)(Network);

export default NetworkContainer;
