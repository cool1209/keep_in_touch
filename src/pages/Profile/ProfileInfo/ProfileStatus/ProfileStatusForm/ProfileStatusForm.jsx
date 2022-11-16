import React from 'react';

import styles from './ProfileStatusForm.module.scss';

const ProfileStatusForm = ({
  status,
  handleSubmit,
  handleStatusChange,
  deactivateEditMode,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.statusInputField}
        placeholder='Enter your status...'
        value={status}
        onChange={handleStatusChange}
        onBlur={deactivateEditMode}
        autoFocus={true}
        maxLength={80}
      />
    </form>
  );
};

export default ProfileStatusForm;
