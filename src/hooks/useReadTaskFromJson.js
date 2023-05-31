import { useEffect, useState } from 'react';

export default function useReadTaskFromJson(taskId) {
  const [task, setTask] = useState()
  const [courseCompletion, setCourseCompletion] = useState()
  useEffect(() => {
      window.electron.ipcRenderer.invoke('readJson').then((result) => {
          setCourseCompletion(result.courseCompletion)
          setTask({...result[taskId]})
      })
  }, [taskId])
  return { task, courseCompletion }
}
