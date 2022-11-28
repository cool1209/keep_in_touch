import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import withAuthUser from '../../hocs/withAuthUser';

import withLayout from '../../hocs/withLayout';
import { fetchUsers } from "../../store/reducers/usersReducer";
import {
  getCurrentPageOfUsers,
  getPagesOfUsers,
  getTotalUsers,
  getUsers,
  getUsersPageIsLoading
} from '../../store/selectors/usersSelectors';
import Network from './Network';

class NetworkContainer extends React.Component {
  setStartUserPage() {
    const startPage = 1;
    this.props.fetchUsers(startPage);
  }
  
  componentDidMount() {
    if (!this.props.users.length) {
      this.setStartUserPage();
    };
  }

  render() {
    const {
      users,
      pages,
      currentPage,
      totalUsers
    } = this.props;

    return (
      <Network 
        pages={pages}
        currentPage={currentPage}
        users={users}
        getUsers={this.props.fetchUsers.bind(this)}
        pageIsLoaded={!!totalUsers}
        usersPageIsLoading={this.props.usersPageIsLoading}
      />
    )
  }
};

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pages: getPagesOfUsers(state),
  currentPage: getCurrentPageOfUsers(state),
  totalUsers: getTotalUsers(state),
  usersPageIsLoading: getUsersPageIsLoading(state)
});

const mapStateToDispatch = {
  fetchUsers
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(NetworkContainer);
