import React, { useContext } from 'react';
import styles from './chapterName.module.css';
import { useNavigate } from 'react-router-dom';
import { Font } from '../../../../../App.jsx';

const ChapterName = ({children, navIndex, isChapter}) => {
  const navigate = useNavigate()
  const { courseFont } = useContext(Font)
  function handleNavigate() {
    navigate(navIndex)
  }

  return (
    <div
      className={(isChapter) ? styles.chapterBlock : styles.subchapterBlock}
      style={{fontSize: ((isChapter) ? courseFont : courseFont - 2) + "px"}}
      onClick={handleNavigate}
    >
      {children}
    </div>
  );
};

export default ChapterName;
