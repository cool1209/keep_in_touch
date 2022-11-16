import { connect } from 'react-redux';
import { compose } from 'redux';

import Preloader from '../../../shared/Preloader/Preloader';
import ProfilePosts from './ProfilePosts';

const ProfilePostsContainer = ({
  isAuthUserProfile,
  totalProfilePosts,
  profilePosts
}) => {
  const isProfilePostsLoaded = totalProfilePosts !== null;

  return (
    <>
      {isProfilePostsLoaded
      ? <ProfilePosts
          profilePosts={profilePosts}
          isAuthUserProfile={isAuthUserProfile}
        />

      : <Preloader />
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  profilePosts: state.posts.profilePosts,
  totalProfilePosts: state.posts.totalProfilePosts,
  isAuthUserProfile: state.profile.isAuthUserProfile
});

export default compose(
  connect(mapStateToProps)
)(ProfilePostsContainer);
