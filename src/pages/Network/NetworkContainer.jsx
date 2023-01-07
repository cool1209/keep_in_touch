import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthUser from "../../hocs/withAuthUser";

import withLayout from "../../hocs/withLayout";
import { fetchUsers } from "../../store/reducers/usersReducer";
import {
  getCurrentPageOfUsers,
  getPagesOfUsers,
  getTotalUsers,
  getUsers,
  getUsersPageIsLoading,
} from "../../store/selectors/usersSelectors";
import Network from "./Network";

const NetworkContainer = ({
  users,
  pages,
  currentPage,
  totalUsers,
  usersPageIsLoading,
  fetchUsers
}) => {
  
  useEffect(() => {
    if (!users.length) {
      const startPage = 1;
      fetchUsers(startPage);
    }
  }, []);

  return (
    <Network
      pages={pages}
      currentPage={currentPage}
      users={users}
      fetchUsers={fetchUsers}
      pageIsLoaded={!!totalUsers}
      usersPageIsLoading={usersPageIsLoading}
    />
  );
};

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pages: getPagesOfUsers(state),
  currentPage: getCurrentPageOfUsers(state),
  totalUsers: getTotalUsers(state),
  usersPageIsLoading: getUsersPageIsLoading(state),
});

const mapStateToDispatch = {
  fetchUsers
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(NetworkContainer);
