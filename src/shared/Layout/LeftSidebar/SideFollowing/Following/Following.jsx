import React from "react";
import { NavLink } from "react-router-dom";

import SmallUserAvatar from "../../../../SmallUserAvatar/SmallUserAvatar";
import styles from "./Following.module.scss";

const Following = ({ following }) => {
  return (
    <NavLink to={`/profile/${following.id}`}  className={styles.following}>
        <SmallUserAvatar
          src={following.avatar}
          styles={styles.following__avatar}
        />
    </NavLink>
  );
};

export default Following;
