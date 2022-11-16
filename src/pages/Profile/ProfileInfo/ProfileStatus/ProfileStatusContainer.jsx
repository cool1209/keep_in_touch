import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import ProfileStatus from "./ProfileStatus";
import { putProfileStatus } from "../../../../store/reducers/profileReducer";
import { useState } from "react";

const ProfileStatusContainer = ({
  profileStatus,
  putProfileStatus,
  isAuthUserProfile
}) => {
  const [ editMode, setEditMode ] = useState(false)
  const [ status, setStatus ] = useState(profileStatus);

  const activateEditMode = () => {
    isAuthUserProfile && setEditMode(true);
  }

  const deactivateEditMode = () => {
    putProfileStatus(status.trim());
    setEditMode(false);
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    return false;
  }

  useEffect(() => {
    if (status !== profileStatus) {
      putProfileStatus(status);
    }
  }, [profileStatus]);

  return <ProfileStatus
    editMode={editMode}
    status={status}
    handleSubmit={handleSubmit}
    handleStatusChange={handleStatusChange}
    deactivateEditMode={deactivateEditMode}
    isAuthUserProfile={isAuthUserProfile}
    activateEditMode={activateEditMode}
  />;
};

const mapStateToProps = (state) => ({
  profileStatus: state.profile.profile.status,
  isAuthUserProfile: state.profile.isAuthUserProfile
});

const mapStateToDispatch = { putProfileStatus };

export default compose(
  connect(mapStateToProps, mapStateToDispatch),
)(ProfileStatusContainer);
