import React from 'react';
import styles from './taskBody.module.css';
import XBtn from '../../../buttons/xBtn';
import CheckBtn from '../../../buttons/checkBtn';
import { useNavigate } from 'react-router-dom';

const TaskBody = ({children, handleCheck, completed}) => {
  const navigate = useNavigate();
  function handleReturn(){
    navigate("/chapterOne/tasks/taskOne/info")
  }

  return (
    <div className={styles.container}>
      <div style={(completed) ? ({pointerEvents:"none", userSelect:"none"}) : null}>
        {children}
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.btn}>
          <XBtn onClick={handleReturn}/>
        </div>
        <div className={styles.btn} style={(completed) ? ({display:"none"}) : null}>
          <CheckBtn onClick={handleCheck}/>
        </div>
      </div>
    </div>
  );
};

export default TaskBody;
