import React from 'react';
import styles from './courseEntry.module.css';

const CourseEntry = ({children}) => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.courseName}>
        {children}
      </div>
      <div className={styles.courseCompletion}>100 %</div>
    </div>
  );
};

export default CourseEntry;
