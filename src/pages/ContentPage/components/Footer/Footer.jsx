import React from 'react';
import s from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={s.footer}>
      "Keep in touch" - 2022. Copyright
      <a 
        href="https://www.linkedin.com/in/ihor-kuchin-6a3736203/"
        target={`_blank`}
        className={s.footer__performer}
      >
        ik-web
      </a>
    </footer>
  );
};

export default Footer;
