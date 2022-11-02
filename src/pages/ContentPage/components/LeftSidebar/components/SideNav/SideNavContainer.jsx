import { connect } from "react-redux";
import { compose } from "redux";
import { setNoContactSelected } from "../../../../../../store/reducers/dialogsReducer";
import SideNav from "./SideNav";

const mapStateToProps = (state) => ({
  userId: state.auth.authUser.id
});

export default compose(
  connect(mapStateToProps, {setNoContactSelected})
)(SideNav);
