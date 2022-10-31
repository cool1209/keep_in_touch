import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPosts, setPosts } from '../../../../../../store/reducers/postsReducer';
import Home from './Home';

const HomeContainer = ({
  authUserId,
  posts,
  getPosts,
  setPosts,
  isPosts
}) => {

  useEffect(() => {
    getPosts(authUserId)

    return () => {
      setPosts([], null);
    }
  }, []);

  return (
    <Home posts={posts} isPosts={isPosts} />
  );
};

const mapStateToProps = (state) => ({
  authUserId: state.auth.authUser.id,
  posts: state.posts.posts,
  isPosts: state.posts.totalPosts
});

export default connect(
  mapStateToProps,
  {getPosts, setPosts}
)(HomeContainer);
