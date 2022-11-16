import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuthUser = (Component) => {
  const ComponentWithAuthUser = ({ isAuth }) => {
    return (
			<>
				{isAuth
					? <Component />
					: <Navigate to="/auth" />
				}
			</>
		);
  };

  const mapStateToProps = (state) => ({
    isAuth: state.auth.authUser.id,
  });

  return connect(mapStateToProps)(ComponentWithAuthUser);
};

export default withAuthUser;
