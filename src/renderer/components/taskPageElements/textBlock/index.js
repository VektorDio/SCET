import React from 'react';
import styles from './textBlock.module.css'
const TextBlock = ({children, top, left, right, bottom, id, round}) => {
  return (
    <div id={id} className={styles.container} style={
      {
        top:top,
        left:left,
        right:right,
        bottom:bottom,
        borderRadius: (round) ? "50%" : null,
      }}
    >
      {children}
    </div>
  );
};

export default TextBlock;
