import server from '../../../../../../backend/server/server';
import { connect } from 'react-redux';
import { setPosts } from '../../../../../../store/reducers/postsReducer';
import Home from './Home';
import { useEffect } from 'react';

const HomeContainer = ({
  authUserId,
  posts,
  setPosts,
  isPosts
}) => {
  useEffect(() => {
    server.get('all-posts', {userId: authUserId})
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
