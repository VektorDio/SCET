import React from 'react';
import styles from './taskImage.module.css';

function TaskImage({ width, src }) {
  return (
    <img
      src={src}
      alt="Image"
      className={styles.image}
      style={{ width }}
      draggable={false}
    />
  );
}

export default TaskImage;
