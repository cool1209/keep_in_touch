import server from '../../../../../../../../backend/server/server';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserPosts } from '../../../../../../../../store/reducers/postsReducer';
import UserPosts from './UserPosts'

const UserPostsContainer = ({
  posts,
  setUserPosts,
  currentUser,
  isPosts
}) => {
  useEffect(() => {
    server.get('server/api/user-posts?user-id=' + currentUser.id)
    .then(posts => {
      if (posts) {
        setUserPosts(posts.items, posts.totalCount);
      }
    })
  }, [currentUser]);

  return (
    <UserPosts posts={posts} isPosts={isPosts} />
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  posts: state.posts.userPosts,
  isPosts: state.posts.totalUserPosts
});

export default connect(
  mapStateToProps,
  {setUserPosts}
)(UserPostsContainer);
