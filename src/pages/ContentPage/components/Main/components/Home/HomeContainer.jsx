import { connect } from 'react-redux';
import { setPostsAC } from '../../../../../../store/reducers/postsReducer';
import Home from './Home';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (publications) => {
    dispatch(setPostsAC(publications));
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
