import { useEffect, useState } from 'react';

export default function useReadTaskFromJson(taskId) {
  const [task, setTask] = useState()
  useEffect(() => {
      window.electron.ipcRenderer.invoke('readJson').then((result) => {
          setTask({...result[taskId]})
      })
  }, [taskId])
  return task
}
