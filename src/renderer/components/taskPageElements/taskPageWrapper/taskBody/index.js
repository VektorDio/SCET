import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './taskBody.module.css';
import XBtn from '../../../buttons/xBtn';
import CheckBtn from '../../../buttons/checkBtn';

function TaskBody({ children, handleCheck, completed, mistake, task }) {
  const navigate = useNavigate();
  function handleReturn() {
    navigate(task);
  }

  return (
    <div
      className={styles.container}
      style={mistake ? { backgroundColor: 'red' } : null}
    >
      <div
        style={completed ? { pointerEvents: 'none', userSelect: 'none' } : null}
      >
        {children}
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.btn}>
          <XBtn onClick={handleReturn} />
        </div>
        <div
          className={styles.btn}
          style={completed ? { display: 'none' } : null}
        >
          <CheckBtn onClick={handleCheck} />
        </div>
      </div>
    </div>
  );
}

export default TaskBody;
