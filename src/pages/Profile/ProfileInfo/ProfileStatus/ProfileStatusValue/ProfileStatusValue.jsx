import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./ProfileStatusValue.module.scss";

const ProfileStatusValue = ({ 
  isAuthUserProfile,
  status,
  activateEditMode
}) => {

  return (
    <>
      {!isAuthUserProfile && !status 
        ? <div></div>
        : <div
            className={classNames(styles.statusValue, {
              [styles.authUserStatusValue]: isAuthUserProfile,
            })}
            onClick={activateEditMode}
          >
            {status.trim() || "Click here to set status"}
          </div>
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthUserProfile: state.profile.isAuthUserProfile
})

export default connect(mapStateToProps)(ProfileStatusValue);
