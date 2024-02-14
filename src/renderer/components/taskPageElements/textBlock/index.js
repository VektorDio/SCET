import React from 'react';
import styles from './textBlock.module.css';

function TextBlock({ children, top, left, right, bottom, id, round }) {
  return (
    <div
      id={id}
      className={styles.container}
      style={{
        top,
        left,
        right,
        bottom,
        borderRadius: round ? '50%' : null,
      }}
    >
      {children}
    </div>
  );
}

export default TextBlock;
