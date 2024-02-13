import React from 'react';
import styles from './frameBar.module.css';

const FrameBar = ({display}) => {

  function handleMinimizeToTray() {
    window.electron.ipcRenderer.sendMessage('minimize')
  }

  function handleAppQuite() {
    window.electron.ipcRenderer.sendMessage('close')
  }

  return (
    <div className={styles.container} style={{display: (display) ? "flex" : "none"}}>
      <div className={styles.appName}>
        CSE Trainer
      </div>
      <div className={styles.btnGroup}>
        <div className={styles.btn} onClick={handleMinimizeToTray}>
          _
        </div>
        <div className={styles.closeBtn} onClick={handleAppQuite}>
          ✕
        </div>
      </div>
    </div>
  );
};

export default FrameBar;
