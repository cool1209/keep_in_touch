import React from 'react';
import PageButton from './PageButton/PageButton';

const PageButtons = ({ stules, items, ...props }) => {
  return (
    <div className={stules}>
    {items.map(item => (
      <PageButton
        page={item}
        key={item}
      />
    ))}
  </div>
  );
};

export default PageButtons;
