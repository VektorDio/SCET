import React from 'react';
import styles from './chapterTitle.module.css'

const ChapterTitle = ({children, font}) => {
  return (
    <div className={styles.container} style={{fontSize: font*1.2 + "px"}}>
      {children}
    </div>
  );
};

export default ChapterTitle;
