import React from 'react';
import styles from './taskImage.module.css';

const TaskImage = ({width, src}) => {
  return (
      <img src={src} alt="Logo" className={styles.image} style={{width:width}}/>
  );
};

export default TaskImage;
