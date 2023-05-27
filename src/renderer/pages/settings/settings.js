import React from 'react';
import styles from "./settings.module.css"
import ArrowLeftBtn from '../../components/buttons/arrowLeftBtn';
import { useNavigate } from 'react-router-dom';
import ToggleBtn from '../../components/buttons/toggleBtn';
import SelectField from '../../components/taskPageElements/selectField';

const Settings = ({frame, onFrameChange, onResolutionChange, resolution}) => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/")
  }

  const resolutions = ["Маленький екран", "Середній екран", "Великий екран"]

  const options = resolutions.map((e, i) => ({
    value: i,
    label: e,
  }))

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <div className={styles.btn}>
          <ToggleBtn toggled={frame} onClick={onFrameChange}/>
        </div>
        <div className={styles.settingText}> Рамка вікна </div>
      </div>

      <div className={styles.setting}>
        <div className={styles.selectField}>
          <SelectField
            minWidth={"40vh"}
            options={options}
            onChange={onResolutionChange}
            defaultValue={{value: -1, label: resolution}}
          />
        </div>
        <div className={styles.settingText}> Розмір вікна </div>
      </div>

      <div className={styles.btn}>
        <ArrowLeftBtn onClick={handleGoBack}/>
      </div>
    </div>
  );
};

export default Settings;
