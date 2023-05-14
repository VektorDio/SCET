import React from 'react';
import styles from './coursePageWrapper.module.css';
import CourseMenuColumn from './courseMenuColumn';
import CourseBody from './courseBody';


const TaskPageWrapper = ({children}) => {
  return (
    <div className={styles.container}>
      <CourseMenuColumn/>
      <CourseBody>
        {children}
      </CourseBody>
    </div>
  );
};

export default TaskPageWrapper;
