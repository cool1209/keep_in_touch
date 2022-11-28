import { connect } from 'react-redux';
import { compose } from 'redux';

import Preloader from '../../../shared/Preloader/Preloader';
import { getProfilePosts, getTotalProfilePosts } from '../../../store/selectors/postsSelectors';
import { getIsAuthUserProfile } from '../../../store/selectors/profileSelectors';
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
  profilePosts: getProfilePosts(state),
  totalProfilePosts: getTotalProfilePosts(state),
  isAuthUserProfile: getIsAuthUserProfile(state)
});

export default compose(
  connect(mapStateToProps)
)(ProfilePostsContainer);
