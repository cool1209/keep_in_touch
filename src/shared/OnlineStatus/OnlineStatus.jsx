import React from "react";
import classNames from "classnames";

import styles from "./OnlineStatus.module.scss";

const OnlineStatus = ({ onlineStatus }) => {
  return (
    <div className={styles.onlineStatus}>
      <span
        className={classNames(
          `${styles.onlineStatus__indicator} ${styles.onlineStatus__indicator_offline}`,
          {
            [styles.onlineStatus__indicator_online]: onlineStatus,
          }
        )}
      ></span>

      <em className={styles.onlineStatus__text}>
        {onlineStatus ? "Online" : "Offline"}
      </em>
    </div>
  );
};

export default OnlineStatus;
