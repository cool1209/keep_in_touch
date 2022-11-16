import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";

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
  isLoading: state.auth.isLoadingProcess,
  isAuth: state.auth.authUser.id
});

export default compose(
  connect(mapStateToProps)
)(AuthContainer);
