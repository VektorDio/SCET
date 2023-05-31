import React, { useEffect, useState } from 'react';

export default function useTask({taskId, setTaskSolved, taskSolved}) {
  const [taskState, setTaskState] = useState({
    start: Date.now(),
    time: 0,
    completed: undefined,
    mistake: false,
  })

  const [task, setTask] = useState()
  let courseCompletion

  function setStart(start) {
    setTaskState(prev => ({...prev, start}))
  }

  function setTime(time) {
    setTaskState(prev => ({...prev, time}))
  }

  function setCompleted(completed) {
    setTaskState(prev => ({...prev, completed}))
  }

  function setMistake(mistake) {
    setTaskState(prev => ({...prev, mistake}))
  }

  function setTaskMistaken() {
    setStart(Date.now())
    setMistake(true)
    setTimeout(()=> {
      setMistake(false)
    }, 100)
  }

  if (!taskState.completed && taskState.completed !== undefined && !taskState.mistake) {
    setTimeout(() => {
      setTime(Math.floor((Date.now() - taskState.start) / 1000))
    }, 1000)
  }

  function handleCheck() {
    if (taskSolved){
      window.electron.ipcRenderer.sendMessage('writeJson', {
          [taskId]:{
            bestTime: taskState.time + 1,
            completed: true,
            tries: task?.tries + 1
          },
          courseCompletion: courseCompletion + 12.5
        }
      )
      setCompleted(true)
    } else {
      window.electron.ipcRenderer.sendMessage('writeJson', {
        [taskId]:{
          bestTime: task?.bestTime,
          completed: task?.completed,
          tries: task?.tries + 1
        }}
      )
      setTaskMistaken()
    }
  }

  useEffect(() => {
    if (taskState.completed === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => {
        courseCompletion = result.courseCompletion
        setTask({...result[taskId]})
        setCompleted(result[taskId].completed)
        if (result[taskId].completed) {
          setTaskSolved()
        }
      })
    }
  }, [])

  return {taskState, handleCheck}
}
