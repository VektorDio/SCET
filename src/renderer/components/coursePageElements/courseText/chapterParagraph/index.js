import React, { useContext } from 'react';
import styles from './chapterParagraph.module.css';
import { AppSettings } from '../../../../App';

function ChapterParagraph({ children }) {
  const { settings } = useContext(AppSettings);
  return (
    <div className={styles.container} style={{ fontSize: `${settings.courseFont}px` }}>
      {children}
    </div>
  );
}

export default ChapterParagraph;
