import React from 'react';
import styles from './chapterName.module.css';
import { useNavigate } from 'react-router-dom';

const ChapterName = ({children, navIndex}) => {

  const navigate = useNavigate()

  function handleNavigate() {
    navigate(navIndex)
  }

  return (
    <div className={styles.chapterBlock} onClick={handleNavigate}>
      {children}
    </div>
  );
};

export default ChapterName;
