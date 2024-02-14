import React, { useContext } from 'react';
import styles from './chapterTitle.module.css';
import { AppSettings } from '../../../../App';

function ChapterTitle({ children }) {
  const { settings } = useContext(AppSettings);
  return (
    <div
      className={styles.container}
      style={{ fontSize: `${settings.courseFont * 1.2}px` }}
    >
      {children}
    </div>
  );
}

export default ChapterTitle;
