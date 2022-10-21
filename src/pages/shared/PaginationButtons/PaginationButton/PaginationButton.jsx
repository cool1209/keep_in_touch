import React from 'react';
import PaginationButtonStyles from './PaginationButton.module.css';

const PaginationButton = ({
  page,
  currentPage,
  onEvent,
  isDisabled = false
}) => {
  return (
    <button
      className={currentPage === page 
        ? `${PaginationButtonStyles.button} ${PaginationButtonStyles.isActive}`
        : PaginationButtonStyles.button
      }
      onClick={() => currentPage !== page && onEvent(page)}
      disabled={isDisabled}
    >
      {page}
    </button>
  );
};

export default PaginationButton;
