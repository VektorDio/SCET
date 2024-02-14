import React from 'react';
import styles from './coursePageWrapper.module.css';
import CourseMenuColumn from './courseMenuColumn';

function TaskPageWrapper({ children }) {
  return (
    <div className={styles.container}>
      <CourseMenuColumn />
      <div className={styles.courseBody}>{children}</div>
    </div>
  );
}

export default TaskPageWrapper;
