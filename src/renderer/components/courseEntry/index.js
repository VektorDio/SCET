import React, { useContext } from 'react';
import styles from './courseEntry.module.css';
import { CourseData } from '../../App';

function CourseEntry({ children }) {
  const { courseData } = useContext(CourseData);
  return (
    <div className={styles.courseContainer}>
      <div className={styles.courseName}>{children}</div>
      <div className={styles.courseCompletion}>{`${courseData.courseCompletion}%`}</div>
    </div>
  );
}

export default CourseEntry;
