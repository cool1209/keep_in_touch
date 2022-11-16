import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import withAuthUser from '../../hocs/withAuthUser';

import withLayout from '../../hocs/withLayout';
import { getUsers } from "../../store/reducers/usersReducer";
import Network from './Network';

class NetworkContainer extends React.Component {
  setStartUserPage() {
    const startPage = 1;
    this.props.getUsers(startPage);
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
        getUsers={this.props.getUsers.bind(this)}
        pageIsLoaded={!!totalUsers}
        usersPageIsLoading={this.props.usersPageIsLoading}
      />
    )
  }
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  pages: state.users.pages,
  currentPage: state.users.currentPage,
  totalUsers: state.users.totalUsers,
  usersPageIsLoading: state.users.isPageLoadingProcess
});

const mapStateToDispatch = {
  getUsers
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(NetworkContainer);
