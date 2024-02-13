import React, { useContext } from 'react';
import styles from "./chapterParagraph.module.css"
import { Font } from '../../../../App.jsx';

const ChapterParagraph = ({children}) => {
  const {courseFont} = useContext(Font)
  return (
    <div className={styles.container} style={{fontSize:courseFont+"px"}}>
      {children}
    </div>
  );
};

export default ChapterParagraph;
