import React, { useContext, useState } from 'react';
import useReadTaskFromJson from './useReadTaskFromJson';
import { Completion } from '../renderer/App';

export default function useTask({taskId, setTaskSolved, taskSolved}) {
  const [taskState, setTaskState] = useState({
    start: Date.now(),
    time: 0,
    completed: undefined,
    mistake: false,
  })

  const { courseCompletion, setCourseCompletion } = useContext(Completion)

  const { task } = useReadTaskFromJson(taskId)
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
    setTimeout(() => {
      setMistake(false)
    }, 100)
  }

  if (!taskState.completed && taskState.completed !== undefined && !taskState.mistake) {
    setTimeout(() => {
      setTime(Math.floor((Date.now() - taskState.start) / 1000))
    }, 1000)
  }

  async function handleCheck() {
    if (taskSolved) {
      await window.electron.ipcRenderer.sendMessage('writeJson', {
        [taskId]: {
          bestTime: taskState.time + 1,
          completed: true,
          tries: task?.tries + 1
        },
        courseCompletion: courseCompletion + 12.5,
      })
      setCompleted(true)
      setCourseCompletion(courseCompletion + 12.5)
    } else {
      await window.electron.ipcRenderer.sendMessage('writeJson', {
        [taskId]: {
          bestTime: task?.bestTime,
          completed: task?.completed,
          tries: task?.tries + 1
        },
      })
      setTaskMistaken()
    }
  }

  if (taskState.time >= 360) {
    window.electron.ipcRenderer.sendMessage('writeJson', {
      [taskId]:{
        bestTime: task?.bestTime,
        completed: task?.completed,
        tries: task?.tries + 1
      },
    })
    setTaskMistaken()
    taskState.time = 0
  }

  if (taskState.completed === undefined){
    if (task) {
      setCompleted(task.completed)
      if (setTaskSolved && task.completed) {
        setTaskSolved()
      }
    }
  }

  return {taskState, handleCheck}
}
