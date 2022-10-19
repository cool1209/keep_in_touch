import { connect } from "react-redux";
import { setNoContactSelectedAC } from "../../../../../../store/reducers/dialogsReducer";
import SideNav from "./SideNav";

const mapDispatchToProps = (dispatch) => ({
  setNoContactSelected: () => {
    dispatch(setNoContactSelectedAC());
  }
});

export default connect(null, mapDispatchToProps)(SideNav);
