import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import GetIcon from "../../../../../assets/ico/GetIcon";
import styles from "./SideNavLink.module.scss";

const SideNavLink = ({ link, onSetNoContactSelected }) => {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        classNames(styles.link, { [styles.link_active]: isActive })
      }
      onClick={onSetNoContactSelected}
    >
      <GetIcon id={link.id} />
      {link.name}
    </NavLink>
  );
};

export default SideNavLink;
