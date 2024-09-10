import React, { useEffect } from 'react';

export default function useKeepResolution(resolution) {
  return useEffect(() => {
    window.resizeTo(...resolution);
    window.electron.ipcRenderer.sendMessage('center');
  }, [resolution]);
}
