import server from '../../../../../../backend/server/server';
import React from 'react';
import { connect } from "react-redux";
import { setUsers } from "../../../../../../store/reducers/usersReducer";
import Network from './Network';

class NetworkContainer extends React.Component {
  state = {
    usersPageIsLoading: false
  }
  
  componentDidMount() {
    if (!this.props.users.length) {
      this.getUsers(1);
    };
  }

  getUsers(page) {
    this.setState({ usersPageIsLoading: true });
    server.get(`server/api/users?page=${page}`)
    .then(users => {
      if (users) {
        this.props.setUsers(users.items, users.totalCount, page);
      };

      this.setState({ usersPageIsLoading: false });
    });
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
        getUsers={this.getUsers.bind(this)}
        pageIsLoaded={!!totalUsers}
        usersPageIsLoading={this.state.usersPageIsLoading}
      />
    )
  }
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  pages: state.users.pages,
  currentPage: state.users.currentPage,
  totalUsers: state.users.totalUsers
});

export default connect(mapStateToProps, {setUsers})(NetworkContainer);
