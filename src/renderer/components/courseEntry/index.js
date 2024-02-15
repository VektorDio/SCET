import React from 'react';
import styles from './courseEntry.module.css';

function CourseEntry({ children, handleCourseSelect }) {
  return (
    <div className={styles.courseContainer} onClick={handleCourseSelect}>
      <div className={styles.courseName}>{children}</div>
    </div>
  );
}

export default CourseEntry;
