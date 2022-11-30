import React from "react";

import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.error__title}>404</h1>

      <p className={styles.error__subtitle}>
        <span>Page not found</span>
        <span>Please check your request</span>
      </p>
    </div>
  );
};

export default Error;
