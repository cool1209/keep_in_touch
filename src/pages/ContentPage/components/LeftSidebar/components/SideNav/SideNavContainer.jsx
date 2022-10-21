import { connect } from "react-redux";
import { setNoContactSelected } from "../../../../../../store/reducers/dialogsReducer";
import SideNav from "./SideNav";

export default connect(null, {setNoContactSelected})(SideNav);
