import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './settings.module.css';
import ArrowLeftBtn from '../../components/buttons/arrowLeftBtn';
import ToggleBtn from '../../components/buttons/toggleBtn';
import SelectField from '../../components/taskPageElements/selectField';
import { AppSettings } from '../../App';
import useKeepResolution from '../../../hooks/useKeepResolution';

function Settings() {
  const navigate = useNavigate();
  const { settings, handleSettingsChange } = useContext(AppSettings);

  useKeepResolution(settings.menuResolution)

  function onResolutionChange(label, index, value) {
    handleSettingsChange({ menuResolution: value });
  }

  const resolutions = [
    { value: [520, 400], label: 'Маленький екран' },
    { value: [780, 560], label: 'Середній екран' },
    { value: [1280, 960], label: 'Великий екран' },
  ];

  const defaultResolution = resolutions.find((e) =>
    e.value.every((e, i) => e === settings.menuResolution[i])
  )

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <div className={styles.btn}>
          <ToggleBtn toggled={settings.hasFrame} onClick={() => handleSettingsChange({hasFrame: !settings.hasFrame})} />
        </div>
        <div className={styles.settingText}> Рамка вікна </div>
      </div>

      <div className={styles.setting}>
        <div className={styles.selectField}>
          <SelectField
            minWidth="40vh"
            options={resolutions}
            onChange={onResolutionChange}
            defaultValue={defaultResolution}
          />
        </div>
        <div className={styles.settingText}> Розмір вікна </div>
      </div>

      <div className={styles.btn}>
        <ArrowLeftBtn onClick={() => navigate(-1)} />
      </div>
    </div>
  );
}

export default Settings;
