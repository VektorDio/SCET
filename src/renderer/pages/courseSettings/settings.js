import React from 'react';
import styles from "./settings.module.css"
import ArrowLeftBtn from '../../components/buttons/arrowLeftBtn';
import { useNavigate } from 'react-router-dom';
import SelectField from '../../components/taskPageElements/selectField';
import RestartBtn from '../../components/buttons/restartBtn';

const CourseSettings = ({onCourseRestart, onResolutionChange, resolution, menuResolution, font, onFontChange}) => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/pages/course")
  }

  const resolutions = ["Маленький екран", "Середній екран", "Великий екран"]
  const fonts = ["Маленький шрифт", "Середній шрифт", "Великий шрифт"]

  const optionsResolution = resolutions.map((e, i) => ({
    value: i,
    label: e,
  }))

  const optionsFonts = fonts.map((e, i) => ({
    value: i,
    label: e,
  }))

  window.resizeTo(...menuResolution)
  window.electron.ipcRenderer.sendMessage('center')

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <div className={styles.btn}>
          <RestartBtn onClick={onCourseRestart}/>
        </div>
        <div className={styles.settingText}> Скину прогресс курсу</div>
      </div>

      <div className={styles.setting}>
        <div className={styles.selectField}>
          <SelectField
            minWidth={"40vh"}
            options={optionsResolution}
            onChange={onResolutionChange}
            defaultValue={{value: -1, label: resolution}}
          />
        </div>
        <div className={styles.settingText}> Розмір вікна </div>
      </div>

      <div className={styles.setting}>
        <div className={styles.selectField}>
          <SelectField
            minWidth={"40vh"}
            options={optionsFonts}
            onChange={onFontChange}
            defaultValue={{value: -1, label: font}}
          />
        </div>
        <div className={styles.settingText}> Розмір шрифту </div>
      </div>

      <div className={styles.btn}>
        <ArrowLeftBtn onClick={handleGoBack}/>
      </div>
    </div>
  );
};

export default CourseSettings;
