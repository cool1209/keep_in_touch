import { connect } from 'react-redux';
import Preloader from '../../../../../../../shared/Preloader/Preloader';
import UserPosts from './UserPosts';

const UserPostsContainer = ({ totalUserPosts, userPosts }) => {
  const isUserPostsLoaded = totalUserPosts !== null;

  return (
    <>
      {isUserPostsLoaded
      ? <UserPosts userPosts={userPosts} />
      : <Preloader />
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  userPosts: state.posts.userPosts,
  totalUserPosts: state.posts.totalUserPosts
});

export default connect(mapStateToProps)(UserPostsContainer);
