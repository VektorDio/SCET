import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './chapterName.module.css';
import { AppSettings } from '../../../../../App';

function ChapterName({ children, navIndex, isChapter }) {
  const navigate = useNavigate();
  const { settings } = useContext(AppSettings);
  function handleNavigate() {
    navigate(navIndex);
  }

  return (
    <div
      className={isChapter ? styles.chapterBlock : styles.subchapterBlock}
      style={{ fontSize: `${isChapter ? settings.courseFont : settings.courseFont - 2}px` }}
      onClick={handleNavigate}
    >
      {children}
    </div>
  );
}

export default ChapterName;
