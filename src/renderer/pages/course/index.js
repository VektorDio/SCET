import React from 'react';
import CoursePageWrapper from '../../components/coursePageElements/coursePageWrapper';

import TaskInfo1_1 from './chapters/chapterOne/tasks/taskOne/info';
import Task1_1 from './chapters/chapterOne/tasks/taskOne/task';
import TaskInfo1_2 from './chapters/chapterOne/tasks/taskTwo/info';
import Task1_2 from './chapters/chapterOne/tasks/taskTwo/task';
import TaskInfo1_3 from './chapters/chapterOne/tasks/taskThree/info';
import Task1_3 from './chapters/chapterOne/tasks/taskThree/task';
import TaskInfo1_4 from './chapters/chapterOne/tasks/taskFour/info';
import Task1_4 from './chapters/chapterOne/tasks/taskFour/task';
import TaskInfo1_5 from './chapters/chapterOne/tasks/taskFive/info';
import Task1_5 from './chapters/chapterOne/tasks/taskFive/task';
import TaskInfo1_6 from './chapters/chapterOne/tasks/taskSix/info';
import Task1_6 from './chapters/chapterOne/tasks/taskSix/task';
import TaskInfo1_7 from './chapters/chapterOne/tasks/taskSeven/info';
import Task1_7 from './chapters/chapterOne/tasks/taskSeven/task';
import TaskInfo1_8 from './chapters/chapterOne/tasks/taskEight/info';
import Task1_8 from './chapters/chapterOne/tasks/taskEight/task';
export const taskRefs = [
  [<TaskInfo1_1/>, <Task1_1/>],
  [<TaskInfo1_2/>, <Task1_2/>],
  [<TaskInfo1_3/>, <Task1_3/>],
  [<TaskInfo1_4/>, <Task1_4/>],
  [<TaskInfo1_5/>, <Task1_5/>],
  [<TaskInfo1_6/>, <Task1_6/>],
  [<TaskInfo1_7/>, <Task1_7/>],
  [<TaskInfo1_8/>, <Task1_8/>],
]

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
