import server from '../../../../../../../../backend/server/server';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserPostsAC } from '../../../../../../../../store/reducers/postsReducer';
import UserPosts from './UserPosts'

const UserPostsContainer = ({
  posts,
  setUserPosts,
  user,
  isPosts
}) => {

  useEffect(() => {
    server.get('server/api/user-posts?user-id=' + user.id)
    .then(posts => {
      if (posts) {
        setUserPosts(posts.items, posts.totalCount);
      }
    })
  }, []);

  return (
    <UserPosts posts={posts} isPosts={isPosts} />
  );
}

const mapStateToProps = (state) => ({
  user: state.loginUser.user,
  posts: state.posts.userPosts,
  isPosts: state.posts.totalUserPosts
});

const mapDispatchToProps = (dispatch) => ({
  setUserPosts: (posts, totalPosts) => {
    dispatch(setUserPostsAC(posts, totalPosts));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostsContainer);
