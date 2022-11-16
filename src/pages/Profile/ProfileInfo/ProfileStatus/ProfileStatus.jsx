import React from "react";

import ProfileStatusForm from "./ProfileStatusForm/ProfileStatusForm";
import ProfileStatusValue from "./ProfileStatusValue/ProfileStatusValue";

const ProfileStatus = ({
  status,
  editMode,
  handleSubmit,
  handleStatusChange,
  activateEditMode,
  deactivateEditMode,
  isAuthUserProfile
}) => {

  return (
    <div>
      {editMode
        ? <ProfileStatusForm
            status={status}
            handleSubmit={handleSubmit}
            handleStatusChange={handleStatusChange}
            deactivateEditMode={deactivateEditMode}
          />

        : <ProfileStatusValue
            isAuthUserProfile={isAuthUserProfile}
            status={status}
            activateEditMode={activateEditMode}
          />
      }
    </div>
  );
};

export default ProfileStatus;
