import { connect } from 'react-redux';
import { setPostsAC } from '../../../../../../store/reducers/postsReducer';
import Home from './Home';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => {
    dispatch(setPostsAC(posts));
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
