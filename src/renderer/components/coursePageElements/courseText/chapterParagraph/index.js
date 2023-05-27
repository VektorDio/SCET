import React from 'react';
import styles from "./chapterParagraph.module.css"

const ChapterParagraph = ({children, fontSize}) => {
  return (
    <div className={styles.container} style={{fontSize:fontSize}}>
      {children}
    </div>
  );
};

export default ChapterParagraph;
