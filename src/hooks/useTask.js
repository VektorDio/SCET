import { useContext, useState } from 'react';
import { CourseData } from '../renderer/App';

export default function useTask({ taskId, timeLimit = 360 }) {
  const { courseData, handleCourseDataChange } = useContext(CourseData);
  const task = courseData[taskId];

  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [completed, setCompleted] = useState(task.completed);
  const [mistake, setMistaken] = useState(false);

  // mistake flickers for 100ms and resets
  function handleTaskMistaken() {
    setStartTime(Date.now());
    setMistaken(true);
    setTimeout(() => {
      setMistaken(false);
    }, 100);
  }

  // attempt timer
  if (!completed && !mistake) {
    setTimeout(() => {
      setTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
  }

  function handleAttempt(isTaskSolved) {
    let data;
    if (isTaskSolved) {
      data = {
        [taskId]: {
          bestTime: time + 1, // bug fix
          completed: true,
          tries: task.tries + 1,
        },
      };
      setCompleted(true);
    } else {
      data = {
        [taskId]: {
          bestTime: task.bestTime,
          completed: task.completed,
          tries: task.tries + 1,
        },
      };
      handleTaskMistaken();
    }
    handleCourseDataChange(data);
  }

  if (time >= timeLimit) {
    handleAttempt(false);
    setTime(0);
  }

  return { time, completed, mistake, handleAttempt };
}
