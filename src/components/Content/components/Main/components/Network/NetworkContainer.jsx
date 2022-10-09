import { connect } from "react-redux";
import Network from "./Network";

const mapStateToProps = (state) => ({
  users: state.users.users
});

const NetworkContainer = connect(mapStateToProps)(Network);

export default NetworkContainer;
