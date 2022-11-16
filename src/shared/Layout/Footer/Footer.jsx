import React from 'react';

import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        "Keep in touch" - 2022. Copyright
      </span>

      <a 
        href="https://www.linkedin.com/in/ihor-kuchin-6a3736203/"
        target={`_blank`}
        className={styles.footer__performer}
      >ik-web</a>
    </footer>
  );
};

export default Footer;
