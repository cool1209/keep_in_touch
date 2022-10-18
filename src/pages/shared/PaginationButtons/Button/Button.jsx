import React from 'react';
import PageButtonStyles from './Button.module.css';

const Button = ({ page, currentPage, getDataPage }) => {
  const isCurrentPage = currentPage === page;

  return (
    <button
      className={isCurrentPage 
        ? `${PageButtonStyles.button} ${PageButtonStyles.isActive}`
        : PageButtonStyles.button
      }
      onClick={() => getDataPage(page)}
    >
      {page}
    </button>
  );
};

export default Button;
