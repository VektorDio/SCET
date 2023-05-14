import React from 'react';
import styles from './chapterTitle.module.css'

const ChapterTitle = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ChapterTitle;
