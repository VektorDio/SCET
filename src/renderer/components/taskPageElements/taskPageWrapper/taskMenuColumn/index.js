import React from 'react';
import styles from './taskMenu.module.css';

const TaskMenuColumn = ({children, time, completed, taskNumber}) => {
  const m = Math.floor(time/60)
  const s = time - m * 60;
  function formatTime(t) {
    if (t < 10) {
      return "0" + t
    } else return t
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.columnName}> Задача {taskNumber} </div>

        <div className={styles.timer}>
          Час {formatTime(m) + ":" + formatTime(s)}
        </div>

        <div className={styles.taskText}>
          {children}
        </div>
      </div>

      <div className={styles.bottomBlock}>
        {(completed) ? (
          <div className={styles.completedText}>
            Завдання виконано
          </div>
        ) : (
          <div className={styles.uncompletedText}>
            Завдання не виконано
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskMenuColumn;
