import React from 'react';
import PaginationButton from './PaginationButton/PaginationButton';
import PaginationButtonsStyles from './PaginationButtons.module.css'

const PaginationButtons = ({
  styles,
  pages,
  currentPage,
  onEvent,
  isDisabled
}) => {

  return (
    <div className={`${styles} ${PaginationButtonsStyles.wrapper}`}>
      {pages.length > 1 && pages.map(page => (
        <PaginationButton
          page={page}
          key={page}
          currentPage={currentPage}
          onEvent={onEvent}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};

export default PaginationButtons;
