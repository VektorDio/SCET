import React from 'react';
import styles from './frameBar.module.css';

const FrameBar = ({display}) => {
  return (
    <div className={styles.container} style={{display: (display) ? "block" : "none"}}>
      123
    </div>
  );
};

export default FrameBar;
