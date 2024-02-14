import React, { useContext, useState } from 'react';
import { CourseData } from '../renderer/App';

export default function useTask({ taskId, setTaskSolved, taskSolved }) {
  const [taskState, setTaskState] = useState({
    start: Date.now(),
    time: 0,
    completed: undefined,
    mistake: false,
  });

  const { courseData, handleCourseDataChange } = useContext(CourseData)
  const task = courseData[taskId];

  function setStart(start) {
    setTaskState((prev) => ({ ...prev, start }));
  }

  function setTime(time) {
    setTaskState((prev) => ({ ...prev, time }));
  }

  function setCompleted(completed) {
    setTaskState((prev) => ({ ...prev, completed }));
  }

  function setMistake(mistake) {
    setTaskState((prev) => ({ ...prev, mistake }));
  }

  function setTaskMistaken() {
    setStart(Date.now());
    setMistake(true);
    setTimeout(() => {
      setMistake(false);
    }, 100);
  }

  if ( !taskState.completed && !taskState.mistake ) {
    setTimeout(() => {
      setTime(Math.floor((Date.now() - taskState.start) / 1000));
    }, 1000);
  }

  async function handleCheck() {
    let data
    if (taskSolved) {
      data = {
        [taskId]: {
          bestTime: taskState.time + 1,
          completed: true,
          tries: task.tries + 1,
        },
      }
      setCompleted(true);
    } else {
      data = {
        [taskId]: {
          bestTime: task.bestTime,
          completed: task.completed,
          tries: task.tries + 1,
        },
      }
      setTaskMistaken();
    }
    handleCourseDataChange(data)
  }

  if (taskState.time >= 360) {
    let data = {
      [taskId]: {
        bestTime: task.bestTime,
        completed: task.completed,
        tries: task.tries + 1,
      },
    }
    handleCourseDataChange(data)
    setTaskMistaken();
    taskState.time = 0;
  }

  if (taskState.completed === undefined) {
    setCompleted(task.completed);
    if (setTaskSolved && task.completed) {
      setTaskSolved();
    }
  }

  return { taskState, handleCheck };
}
