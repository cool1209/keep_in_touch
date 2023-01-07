import React from "react";
import styles from "./WithNoData.module.scss";

const WithNoData = ({ message }) => {
  return (
    <h2 className={styles.isLoading}>
      {message}
    </h2>
  )
};

export default WithNoData;
