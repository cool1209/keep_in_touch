import React from 'react';
import Button from './Button/Button';
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
        <Button
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
