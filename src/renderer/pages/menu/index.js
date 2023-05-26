import React from 'react';
import styles from "./menu.module.css"
import CourseEntry from '../../components/courseEntry';
import { useNavigate } from 'react-router-dom';
import GearBtn from '../../components/buttons/gearBtn';
import ArrowRightBtn from '../../components/buttons/arrowRightBtn';
import XBtn from '../../components/buttons/xBtn';
function Menu({}) {

  window.resizeTo(757, 529)
  window.electron.ipcRenderer.sendMessage('center')

  const navigate = useNavigate();
  function handleCourseEnter() {
      navigate("/pages/course")
  }

  function handleAppClose() {
    window.close()
  }

  return (
    <div className={styles.container}>

        <div className={styles.list}>
          <CourseEntry>Теорiя Автоматичного Управлiння</CourseEntry>
        </div>

        <div className={styles.buttonGroup} >
          <div className={styles.btn}>
            <ArrowRightBtn onClick={handleCourseEnter}/>
          </div>
          <div className={styles.btn}>
            <GearBtn/>
          </div>
          <div className={styles.btn}>
            <XBtn onClick={handleAppClose}/>
          </div>
        </div>
    </div>
  );
}

export default Menu;
