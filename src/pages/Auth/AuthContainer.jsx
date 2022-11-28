import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { getAuthLoadingProcess, getIsAuth } from "../../store/selectors/authSelectors";

import Auth from "./Auth";

const AuthContainer = ({ isLoading, isAuth }) => {
  return (
    <>
      {!isAuth
      ? <Auth isLoading={isLoading} /> 
      : <Navigate to='/' />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getAuthLoadingProcess(state),
  isAuth: getIsAuth(state)
});

export default compose(
  connect(mapStateToProps)
)(AuthContainer);
