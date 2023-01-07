import React from 'react';
import { Route, Routes } from 'react-router-dom';

import WithNoData from '../../../shared/WithNoData/WithNoData';
import DialogContainer from './Dialog/DialogContainer';
import styles from './Dialogs.module.scss';


const Dialogs = ({
  dialogs,
  isContactSelected,
}) => {
  return (
    <ul className={styles.dialogs}>
      {isContactSelected
      ? <Routes>
          {dialogs.map(dialog => (
            <Route
              path={`${dialog.id}`}
              key={dialog.id} 
              element={ <DialogContainer dialog={dialog} /> }
            />
          ))}
        </Routes>

      : <div className={styles.dialogs__hint}>
          {dialogs.length && <WithNoData message={"Please select a contact"} />}
        </div>
      }
    </ul>
  );
};

export default Dialogs;
