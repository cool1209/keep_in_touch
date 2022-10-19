import server from '../../../../../../../../backend/server/server';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserPostsAC } from '../../../../../../../../store/reducers/postsReducer';
import UserPosts from './UserPosts'

const UserPostsContainer = ({
  posts,
  setUserPosts,
  user
}) => {

  useEffect(() => {
    server.get('server/api/user-posts?user-id=' + user.id)
    .then(posts => {
      if (posts) {
        setUserPosts(posts.items);
      }
    })
  }, []);

  return (
    <UserPosts posts={posts} />
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.userPosts,
  user: state.loginUser.user
});

const mapDispatchToProps = (dispatch) => ({
  setUserPosts: (posts) => {
    dispatch(setUserPostsAC(posts));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostsContainer);
