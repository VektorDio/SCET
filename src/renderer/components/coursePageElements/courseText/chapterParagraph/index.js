import React from 'react';
import styles from './chapterParagraph.module.css';

function ChapterParagraph({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default ChapterParagraph;
