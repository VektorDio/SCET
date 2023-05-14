import React from 'react';
import styles from './courseBody.module.css'
const CourseBody = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default CourseBody;
