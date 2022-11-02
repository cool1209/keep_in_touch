import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { putProfileStatus } from '../../../../../../../../../store/reducers/profileReducer';
import ProfileStatus from './ProfileStatus';

const ProfileStatusContainer = ({
  profileId,
  profileStatus,
  isAuthUserProfile,
  putProfileStatus
}) => {

  const [ editMode, setEditMode ] = useState(false);
  const [ statusQuery, setStatusQuery ] = useState(profileStatus);

  const onActivateEditMode = () => {
    if (isAuthUserProfile) {
      setEditMode(true);
    }
  };

  const onDeactivateEditMode = () => {
    setEditMode(false);

    if (profileStatus !== statusQuery) {
      putProfileStatus(profileId, statusQuery.trim());
    }
  };

  const onUpdateStatus = (e) => {
    setStatusQuery(e.target.value);
  };

  useEffect(() => {
    if (statusQuery !== profileStatus) {
      setStatusQuery(profileStatus);
    }
  }, [profileStatus]);

  return (
    <ProfileStatus
      isAuthUserProfile={isAuthUserProfile}
      isEditMode={editMode}
      statusQuery={statusQuery}
      onActivateEditMode={onActivateEditMode}
      onDeactivateEditMode={onDeactivateEditMode}
      onUpdateStatus={onUpdateStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  profileStatus: state.profile.profileStatus,
  isAuthUserProfile: state.profile.isAuthUserProfile
});

export default compose(
  connect(mapStateToProps,{putProfileStatus})
)(ProfileStatusContainer);
