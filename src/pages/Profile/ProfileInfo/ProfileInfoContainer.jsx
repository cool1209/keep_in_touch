import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile, getProfileOnlineStatus } from '../../../store/selectors/profileSelectors';
import ProfileInfo from './ProfileInfo';

const ProfileInfoContainer = ({ profile, onlineStatus }) => {
  return (
    <ProfileInfo profile={profile} onlineStatus={onlineStatus} />
  )
}

const mapStateToProps = (state) => ({
  profile: getProfile(state),
  onlineStatus: getProfileOnlineStatus(state)
});

export default compose(
  connect(mapStateToProps)
)(ProfileInfoContainer);
