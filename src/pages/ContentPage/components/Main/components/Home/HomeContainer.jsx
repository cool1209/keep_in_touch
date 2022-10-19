import server from '../../../../../../backend/server/server';
import { connect } from 'react-redux';
import { setPostsAC } from '../../../../../../store/reducers/postsReducer';
import Home from './Home';
import { useEffect } from 'react';

const HomeContainer = ({ posts, setPosts }) => {

  useEffect(() => {
    server.get('server/api/posts')
    .then((posts) => {
      if(posts) {
        setPosts(posts.items);
      }
    });
  }, []);

  return (
    <Home posts={posts} setPosts={setPosts} />
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => {
    dispatch(setPostsAC(posts));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
