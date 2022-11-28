import { connect } from 'react-redux';
import { useEffect } from 'react';
import { compose } from 'redux';

import { fetchPosts, setPosts } from '../../store/reducers/postsReducer';
import Home from './Home';
import withLayout from '../../hocs/withLayout';
import withAuthUser from '../../hocs/withAuthUser';
import { getAuthUserId } from '../../store/selectors/authSelectors';
import { getIsPostsPosts, getPosts } from '../../store/selectors/postsSelectors';

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
  authUserId: getAuthUserId(state),
  posts: getPosts(state),
  isPosts: getIsPostsPosts(state)
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
