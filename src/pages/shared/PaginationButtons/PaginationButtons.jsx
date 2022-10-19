import React from 'react';
import PaginationButton from './PaginationButton/PaginationButton';
import PaginationButtonsStyles from './PaginationButtons.module.css'

const PaginationButtons = ({
  styles,
  pages,
  currentPage,
  getDataPage
}) => {

  return (
    <div className={`${styles} ${PaginationButtonsStyles.wrapper}`}>
      {pages.map(page => (
        <PaginationButton
          page={page}
          key={page}
          currentPage={currentPage}
          getDataPage={getDataPage}
        />
      ))}
    </div>
  );
};

export default PaginationButtons;
