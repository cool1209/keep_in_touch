import { connect } from 'react-redux';
import { setUserPostsAC } from '../../../../../../../../store/reducers/postsReducer';
import UserPosts from './UserPosts'

const mapStateToProps = (state) => ({
  posts: state.posts.userPosts,
  user: state.loginUser.user
});

const mapDispatchToProps = (dispatch) => ({
  setUserPosts: (posts) => {
    dispatch(setUserPostsAC(posts));
  }
});

const UserPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);

export default UserPostsContainer;
