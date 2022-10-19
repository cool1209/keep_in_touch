import React from 'react';
import FooterStyles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={FooterStyles.wrapper}>
      <span>
        "Keep in touch" - 2022. Copyright
      </span>

      <a 
        href="https://www.linkedin.com/in/ihor-kuchin-6a3736203/"
        target={`_blank`}
        className={FooterStyles.performer}
      >ik-web</a>
    </footer>
  );
};

export default Footer;
