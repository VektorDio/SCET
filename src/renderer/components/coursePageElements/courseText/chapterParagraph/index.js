import React from 'react';
import styles from "./chapterParagraph.module.css"

const ChapterParagraph = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ChapterParagraph;
