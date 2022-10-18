import { connect } from 'react-redux';
import { setUserPostsAC } from '../../../../../../../../store/reducers/postsReducer';
import Posts from './Posts'

const mapStateToProps = (state) => ({
  posts: state.posts.userPosts,
  user: state.loginUser.user
});

const mapDispatchToProps = (dispatch) => ({
  setUserPosts: (posts) => {
    dispatch(setUserPostsAC(posts));
  }
});

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsContainer;
