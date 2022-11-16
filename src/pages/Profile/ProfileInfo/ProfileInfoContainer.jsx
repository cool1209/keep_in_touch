import { connect } from 'react-redux';
import { compose } from 'redux';
import ProfileInfo from './ProfileInfo';

const ProfileInfoContainer = ({ profile, onlineStatus }) => {
  return (
    <ProfileInfo profile={profile} onlineStatus={onlineStatus} />
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  onlineStatus: state.profile.onlineStatus
});

export default compose(
  connect(mapStateToProps)
)(ProfileInfoContainer);
