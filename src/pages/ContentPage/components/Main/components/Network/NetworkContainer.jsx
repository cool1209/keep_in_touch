import server from '../../../../../../backend/server/server';
import React from 'react';
import { connect } from "react-redux";
import { setUsersAC } from "../../../../../../store/reducers/usersReducer";
import Network from './Network';

class NetworkContainer extends React.Component {
  
  componentDidMount() {
    if (!this.props.users.length) {
      this.getUsers(1);
    };
  }

  getUsers(page) {
    server.get(`server/api/users?page=${page}`)
    .then(users => {
      if (users) {
        this.props.setUsers(users.items, users.totalCount, page);
      }
    })
  }

  render() {
    const {
      users,
      pages,
      currentPage
    } = this.props;

    return (
      <Network 
      pages={pages}
      currentPage={currentPage}
      users={users}
      getUsers={this.getUsers.bind(this)}
      />
    )
  }
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  pages: state.users.pages,
  currentPage: state.users.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users, totalCount, currentPage) => {
    dispatch(setUsersAC(users, totalCount, currentPage));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkContainer);
