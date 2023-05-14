import React from 'react';
import styles from './subchapterName.module.css';
import { useNavigate } from 'react-router-dom';

const SubchapterName = ({children, navIndex}) => {

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

export default SubchapterName;
