import React from 'react';
import PaginationButtonStyles from './PaginationButton.module.css';

const PaginationButton = ({
  page,
  currentPage,
  getDataPage
}) => {

  return (
    <button
      className={currentPage === page 
        ? `${PaginationButtonStyles.button} ${PaginationButtonStyles.isActive}`
        : PaginationButtonStyles.button
      }
      onClick={() => getDataPage(page)}
    >
      {page}
    </button>
  );
};

export default PaginationButton;
