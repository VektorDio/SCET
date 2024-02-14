import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './settings.module.css';
import ArrowLeftBtn from '../../components/buttons/arrowLeftBtn';
import SelectField from '../../components/taskPageElements/selectField';
import RestartBtn from '../../components/buttons/restartBtn';
import { AppSettings } from '../../App';

function CourseSettings({ onCourseRestart }) {
  const navigate = useNavigate();
  const { settings, handleSettingsChange } = useContext(AppSettings);

  const resolutions = [
    { value: [840, 580], label: 'Маленький екран' },
    { value: [1280, 960], label: 'Середній екран' },
    { value: [1920, 1080], label: 'Великий екран' },
  ];
  const fonts = [
    { value: 16, label: 'Маленький шрифт' },
    { value: 26, label: 'Середній шрифт' },
    { value: 34, label: 'Великий шрифт' },
  ];

  function handleGoBack() {
    navigate('/pages/course');
  }

  function onFontChange(label, index, value) {
    handleSettingsChange({ font: value });
  }

  function onResolutionChange(label, index, value) {
    handleSettingsChange({ courseResolution: value });
  }

  useEffect(() => {
    window.resizeTo(...settings.menuResolution);
    window.electron.ipcRenderer.sendMessage('center');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <div className={styles.btn}>
          <RestartBtn onClick={onCourseRestart} />
        </div>
        <div className={styles.settingText}> Скину прогресс курсу</div>
      </div>

      <div className={styles.setting}>
        <div className={styles.selectField}>
          <SelectField
            minWidth="40vh"
            options={resolutions}
            onChange={onResolutionChange}
            defaultValue={resolutions.find((e) =>
              e.value.every((e, i) => e === settings.courseResolution[i])
            )}
          />
        </div>
        <div className={styles.settingText}> Розмір вікна </div>
      </div>

      <div className={styles.setting}>
        <div className={styles.selectField}>
          <SelectField
            minWidth="40vh"
            options={fonts}
            onChange={onFontChange}
            defaultValue={fonts.find((e) => e.value === settings.courseFont)}
          />
        </div>
        <div className={styles.settingText}> Розмір шрифту </div>
      </div>

      <div className={styles.btn}>
        <ArrowLeftBtn onClick={handleGoBack} />
      </div>
    </div>
  );
}

export default CourseSettings;
