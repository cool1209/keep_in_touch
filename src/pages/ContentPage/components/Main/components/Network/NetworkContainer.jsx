import { connect } from "react-redux";
import { setUsersAC } from "../../../../../../store/reducers/usersReducer";
// import NetworkFn from "./NetworkFn";
import NetworkClass from "./NetworkClass";

const mapStateToProps = (state) => ({
  users: state.users.users,
  pages: state.users.pages,
  currentPage: state.users.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users, totalCount, currentPage) => {
    dispatch(setUsersAC(users, totalCount, currentPage));
  }
});

const NetworkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
// )(NetworkFn);
)(NetworkClass);

export default NetworkContainer;
