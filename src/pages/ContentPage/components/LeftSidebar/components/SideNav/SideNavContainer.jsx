import { connect } from "react-redux";
import { setNoContactSelected } from "../../../../../../store/reducers/dialogsReducer";
import SideNav from "./SideNav";

const mapStateToProps = (state) => ({
  userId: state.user.authorizedUser.id
})

export default connect(
  mapStateToProps,
  {setNoContactSelected}
)(SideNav);
