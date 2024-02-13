// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

const electronHandler = {
    ipcRenderer: {
        sendMessage(channel, args) {
            ipcRenderer.send(channel, args);
        },
        on(channel, func) {
            const subscription = (_event, ...args) =>
                func(...args);
            ipcRenderer.on(channel, subscription);

            return () => {
                ipcRenderer.removeListener(channel, subscription);
            };
        },
        once(channel, func) {
            ipcRenderer.once(channel, (_event, ...args) => func(...args));
        },
        invoke(channel, args) {
            return ipcRenderer.invoke(channel, args);
        },
    },
};

contextBridge.exposeInMainWorld('electron', electronHandler);
