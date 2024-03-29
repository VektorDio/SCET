import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './taskInfoBar.module.css';
import ArrowRightBtn from '../../../buttons/arrowRightBtn';

function TaskInfoBar({ selectedCourse, time, tries }) {
  const navigate = useNavigate();
  function handleTaskEnter(link) {
    navigate(link);
  }

  const m = Math.floor(time / 60);
  const s = time - m * 60;
  function formatTime(t) {
    if (t < 10) {
      return `0${t}`;
    }
    return t;
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskInfoText}>
        Спроб: {tries} Час: {`${formatTime(m)}:${formatTime(s)}`}
      </div>
      <div className={styles.button}>
        <ArrowRightBtn onClick={() => handleTaskEnter(selectedCourse)} />
      </div>
    </div>
  );
}

export default TaskInfoBar;
