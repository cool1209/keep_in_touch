import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import SmallUserAvatar from "../../../../shared/SmallUserAvatar/SmallUserAvatar";
import styles from "./Contact.module.scss";

const Contact = ({ dialog, setIsContactSelected }) => {
  return (
    <NavLink
      to={`${dialog.id}`}
      onClick={setIsContactSelected}
      className={({ isActive }) =>
      classNames(styles.contact, { [styles.contact_active]: isActive })
    }
    > 
      <SmallUserAvatar src={dialog.contactAvatar} />
      {dialog.contact}
    </NavLink>
  );
};

export default Contact;
