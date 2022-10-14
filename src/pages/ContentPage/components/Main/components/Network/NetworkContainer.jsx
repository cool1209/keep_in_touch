import { connect } from "react-redux";
import { addUsersAC, setUsersAC } from "../../../../../../store/reducers/usersReducer";
// import NetworkFn from "./NetworkFn";
import NetworkClass from "./NetworkClass";

const mapStateToProps = (state) => ({
  users: state.users.users, 
  page: state.users.requiredUsersPage
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
  addUsers: (users) => {
    dispatch(addUsersAC(users));
  }
});

const NetworkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
// )(NetworkFn);
)(NetworkClass);

export default NetworkContainer;
