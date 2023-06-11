import React, { useContext } from 'react';
import styles from './chapterTitle.module.css'
import { Font } from '../../../../App';

const ChapterTitle = ({children}) => {
  const {courseFont} = useContext(Font)
  return (
    <div className={styles.container} style={{fontSize: courseFont*1.2 + "px"}}>
      {children}
    </div>
  );
};

export default ChapterTitle;
