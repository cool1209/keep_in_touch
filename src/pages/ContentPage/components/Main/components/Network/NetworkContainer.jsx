import { connect } from "react-redux";
import { addUsersAC } from "../../../../../../store/reducers/usersReducer";
import Network from "./Network";

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  onAddUsers: () => {
    dispatch(addUsersAC());
  }
});

const NetworkContainer = connect(mapStateToProps, mapDispatchToProps)(Network);

export default NetworkContainer;
