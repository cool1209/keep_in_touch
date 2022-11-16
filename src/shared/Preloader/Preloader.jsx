import React from 'react';
import PreloaderStyles from'./Preloader.module.scss';
import { GetImg } from '../../assets/img/GetImg';

const Preloader = (props) => {
  return (
    <div className={`${PreloaderStyles.preloader} ${props.styles}`}>
      <GetImg id={'spinner'} />
    </div>
  );
};

export default Preloader;
