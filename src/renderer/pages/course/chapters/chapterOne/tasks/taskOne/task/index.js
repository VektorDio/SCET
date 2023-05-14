import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./firstTask.module.css"
const Task = () => {
  const [start] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [completed, setCompleted] = useState()

  useEffect(() => {
    if (completed === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => {
        setCompleted(result.task1.completed)
      })
    }
  })

  if (!completed && completed !== undefined) {
    setTimeout(() => {
      setTime(Math.floor((Date.now() - start) / 1000))
    }, 1000)
  }

  async function handleCheck() {

    let test = true

    let obj = await window.electron.ipcRenderer.invoke('readJson')
    let task = obj.task1

    if (test){
      setCompleted(true)
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task1:{
          bestTime: time + 1,
          completed: true,
          tries: task.tries + 1
        }}
      )
    } else {
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task1:{
          tries: task.tries + 1
        }}
      )
    }
  }

  return (
    <div className={styles.container}>
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.1"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed}>
        123
      </TaskBody>
    </div>
  );
};

export default Task;
