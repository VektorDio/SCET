import React from 'react';
import styles from './frameBar.module.css';

function FrameBar({ display }) {
  function handleMinimizeToTray() {
    window.electron.ipcRenderer.sendMessage('minimize');
  }

  function handleAppQuite() {
    window.electron.ipcRenderer.sendMessage('close');
  }

  if (display) {
    return (
      <div className={styles.container}>
        <div className={styles.appName}>CSE Trainer</div>
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
  }
  return null;
}

export default FrameBar;
