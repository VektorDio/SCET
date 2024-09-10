import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './chapterName.module.css';

function ChapterName({ children, navIndex, isChapter }) {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(navIndex);
  }

  return (
    <div
      className={isChapter ? styles.chapterBlock : styles.subchapterBlock}
      style={{ fontSize: isChapter ? '0.9rem' : '0.8rem' }}
      onClick={handleNavigate}
    >
      {children}
    </div>
  );
}

export default ChapterName;
