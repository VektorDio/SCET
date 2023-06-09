import React, { useContext } from 'react';
import styles from "./chapterParagraph.module.css"
import { Font } from '../../../../App';

const ChapterParagraph = ({children}) => {
  const fontSize = useContext(Font)
  return (
    <div className={styles.container} style={{fontSize:fontSize}}>
      {children}
    </div>
  );
};

export default ChapterParagraph;
