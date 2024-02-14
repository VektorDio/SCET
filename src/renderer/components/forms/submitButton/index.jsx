import React from 'react';
import styles from './submitButton.module.css';

function SubmitButton({ field, ...props }) {
  return (
    <input
      className={styles.submitButton}
      type="submit"
      {...field}
      {...props}
    />
  );
}

export default SubmitButton;
