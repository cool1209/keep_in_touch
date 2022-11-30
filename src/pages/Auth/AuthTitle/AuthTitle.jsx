import React from 'react';

import styles from './AuthTitle.module.scss';

const AuthTitle = () => {
    return (
        <h1 className={styles.authTitle}>
          <span>Welcome</span>
          <span>to</span>
          <span className={styles.authTitle__decorate}>Keep in touch</span>
        </h1>
    );
};

export default React.memo(AuthTitle);
