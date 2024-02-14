import React from 'react';
import styles from './upperLabel.module.css';

function UpperLabel({ children }) {
  return <div className={styles.upperLabel}>{children}</div>;
}

export default UpperLabel;
