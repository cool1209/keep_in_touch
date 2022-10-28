import { connect } from 'react-redux';
import { setUserPosts } from '../../../../../../../../store/reducers/postsReducer';
import { getUserPosts } from '../../../../../../../../api/api';
import { useEffect } from 'react';
import UserPosts from './UserPosts'

const UserPostsContainer = ({
  posts,
  setUserPosts,
  currentUser,
  isPosts
}) => {

  useEffect(() => {
    getUserPosts(currentUser.id)
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
  currentUser: state.user.currentUser,
  posts: state.posts.userPosts,
  isPosts: state.posts.totalUserPosts
});

export default connect(
  mapStateToProps,
  {setUserPosts}
)(UserPostsContainer);
