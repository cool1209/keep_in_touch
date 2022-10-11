import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      "Keep in touch" - 2022. Copyright
      <a 
        href="https://www.linkedin.com/in/ihor-kuchin-6a3736203/"
        target={`_blank`}
        className={styles.footer__performer}
      >
        ik-web
      </a>
    </footer>
  );
};

export default Footer;
