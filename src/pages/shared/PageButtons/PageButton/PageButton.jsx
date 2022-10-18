import React from 'react';
import PageButtonStyles from './PageButton.module.css';

const PageButton = ({ page, getUsers }) => {
  return (
    <button
      key={page}
      className={PageButtonStyles.button}
      onClick={getUsers}
    >
      {page}
    </button>
  );
};

export default PageButton;
