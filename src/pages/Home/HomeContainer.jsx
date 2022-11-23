import { connect } from 'react-redux';
import { useEffect } from 'react';
import { compose } from 'redux';

import { fetchPosts, setPosts } from '../../store/reducers/postsReducer';
import Home from './Home';
import withLayout from '../../hocs/withLayout';
import withAuthUser from '../../hocs/withAuthUser';

const HomeContainer = ({
  authUserId,
  posts,
  fetchPosts,
  setPosts,
  isPosts
}) => {

  useEffect(() => {
    fetchPosts(authUserId)

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

const mapStateToDispatch = {
  fetchPosts,
  setPosts
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(HomeContainer);
