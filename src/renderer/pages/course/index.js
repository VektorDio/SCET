import React from 'react';
import CoursePageWrapper from '../../components/coursePageElements/coursePageWrapper';

const Course = ({resolution}) => {

  window.resizeTo(...resolution)
  window.electron.ipcRenderer.sendMessage('center')

  return (
      <CoursePageWrapper>
        <h1>//Course Info</h1>
      </CoursePageWrapper>
  );
};

export default Course;
