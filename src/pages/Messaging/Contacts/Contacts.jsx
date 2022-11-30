import React from 'react';
import classNames from 'classnames';

import WithNoData from '../../../shared/WithNoData/WithNoData';
import Contact from './Contact/Contact';
import styles from './Contacts.module.scss';

const Contacts = ({
  dialogs,
  isSelected,
  setIsContactSelected
}) => {
  return (
    <ul className={classNames(
      styles.contacts,
      {[styles.turnOffContacts]: isSelected}
    )}>
      {!dialogs.length && 
        <div className={styles.contacts__hint}>
          <WithNoData message={"You don't have any dialogue..."} />
        </div>
      }

      {dialogs.map(dialog => (
        <Contact
          key={dialog.id}
          dialog={dialog}
          setIsContactSelected={setIsContactSelected}
        />
      ))}
    </ul>
  );
}

export default Contacts;
