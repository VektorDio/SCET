import React, { useContext } from 'react';
import styles from './courseEntry.module.css';
import { Completion } from '../../App.jsx';

const CourseEntry = ({children}) => {
  const {courseCompletion} = useContext(Completion)
  return (
    <div className={styles.courseContainer}>
      <div className={styles.courseName}>
        {children}
      </div>
      <div className={styles.courseCompletion}>{courseCompletion + "%"}</div>
    </div>
  );
};

export default CourseEntry;
