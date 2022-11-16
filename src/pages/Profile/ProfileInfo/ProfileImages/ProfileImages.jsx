import React from "react";
import styles from "./ProfileImages.module.scss";

const ProfileImages = ({ wallpaper, avatar }) => {
  return (
    <div className={styles.images}>
      <img
        src={wallpaper}
        alt="User profile wallpaper"
        className={styles.images__wallpaper}
      />

      <div className={styles.images__avatarContainer}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.images__avatar}
        />
      </div>
    </div>
  );
};

export default ProfileImages;
