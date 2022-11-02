import { connect } from 'react-redux';
import { compose } from 'redux';
import UserInfo from './UserInfo';

const UserInfoContainer = ({ profile }) => {

  return (
    <UserInfo profile={profile} />
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile
});

export default compose(
  connect(mapStateToProps)
)(UserInfoContainer);
