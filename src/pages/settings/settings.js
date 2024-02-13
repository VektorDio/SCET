import React, { useContext } from 'react';
import styles from "./settings.module.css"
import ArrowLeftBtn from '../../components/buttons/arrowLeftBtn';
import { useNavigate } from 'react-router-dom';
import ToggleBtn from '../../components/buttons/toggleBtn';
import SelectField from '../../components/taskPageElements/selectField';
import { MenuResolution } from '../../App.jsx';

const Settings = ({frame, onFrameChange}) => {
  const navigate = useNavigate();
  const {menuResolution, handleMenuResolutionChange} = useContext(MenuResolution)
  function handleGoBack() {
    navigate("/")
  }
  function onResolutionChange(label, index, value) {
    handleMenuResolutionChange(value)
  }

  const resolutions = [
    { value: [520, 400], label: 'Маленький екран' },
    { value: [780, 560], label: 'Середній екран' },
    { value: [1280, 960], label: 'Великий екран' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <div className={styles.btn}>
          <ToggleBtn toggled={frame} onClick={() => onFrameChange(!frame)}/>
        </div>
        <div className={styles.settingText}> Рамка вікна </div>
      </div>

      <div className={styles.setting}>
        <div className={styles.selectField}>
          <SelectField
            minWidth={"40vh"}
            options={resolutions}
            onChange={onResolutionChange}
            defaultValue={resolutions.find((e) => e.value.every((e,i) => e === menuResolution[i]))}
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
