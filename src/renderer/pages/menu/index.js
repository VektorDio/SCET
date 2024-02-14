import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './menu.module.css';
import CourseEntry from '../../components/courseEntry';
import GearBtn from '../../components/buttons/gearBtn';
import ArrowRightBtn from '../../components/buttons/arrowRightBtn';
import XBtn from '../../components/buttons/xBtn';
import { AppSettings } from '../../App';
import useKeepResolution from '../../../hooks/useKeepResolution';

function Menu() {
  const navigate = useNavigate();
  const { settings } = useContext(AppSettings);
  useKeepResolution(settings.menuResolution)

  function handleCourseEnter() {
    navigate('/pages/course');
  }
  function handleSettingsEnter() {
    navigate('/pages/settings');
  }
  function handleAppClose() {
    window.electron.ipcRenderer.sendMessage('close');
  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <CourseEntry>Теорiя Автоматичного Управлiння</CourseEntry>
      </div>

      <div className={styles.buttonGroup}>
        <div className={styles.btn}>
          <ArrowRightBtn onClick={handleCourseEnter} />
        </div>
        <div className={styles.btn}>
          <GearBtn onClick={handleSettingsEnter} />
        </div>
        <div className={styles.btn}>
          <XBtn onClick={handleAppClose} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
