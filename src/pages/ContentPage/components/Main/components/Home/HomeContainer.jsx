import { connect } from 'react-redux';
import { setPosts } from '../../../../../../store/reducers/postsReducer';
import Home from './Home';
import { useEffect } from 'react';
import { getPosts } from '../../../../../../api/api';

const HomeContainer = ({
  authUserId,
  posts,
  setPosts,
  isPosts
}) => {
  useEffect(() => {
    getPosts({userId: authUserId})
    .then((posts) => {
      if(posts) {
        setPosts(posts.items, posts.totalCount);
      }
    });
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

export default connect(mapStateToProps, {setPosts})(HomeContainer);
