import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./secondTask.module.css"
import TaskImage from '../../../../../../../components/taskPageElements/taskImage';
import SelectField from '../../../../../../../components/taskPageElements/selectField';

import acceleration from '../../../../../../../../../assets/diagrams/acceleration.png';
import dirac from '../../../../../../../../../assets/diagrams/dirac.png';
import linear from '../../../../../../../../../assets/diagrams/linear.png';
import step from '../../../../../../../../../assets/diagrams/step.png';
import sin from '../../../../../../../../../assets/diagrams/sin.png';
const Task = () => {
  const [start, setStart] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [mistake, setMistake] = useState(false)
  const [completed, setCompleted] = useState()


  const [selectedOptions, setSelectedOptions] = useState([])

  function setTaskMistaken() {
    setStart(Date.now())
    setMistake(true)
    setTimeout(()=> {
      setMistake(false)
    }, 100)
  }

  if (!completed && completed !== undefined && !mistake) {
    setTimeout(() => {
      setTime(Math.floor((Date.now() - start) / 1000))
    }, 1000)
  }

  const answers = ['Східчаста функція',
    'Одинична імпульсна функція',
    'Лінійний зростаючий сигнал',
    'Сигнал з постійним прискоренням',
    'Гармонійний сигнал'
  ]

  const images = [step, dirac, linear, acceleration, sin]

  const options = answers.map((e, i) => ({
    value: i,
    label: e,
  }))
  function handleChoice(choice, index) {
    let buf = [...selectedOptions]
    buf[index] = choice
    setSelectedOptions([...buf])
  }

  useEffect(() => {
    if (completed === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => {
        setCompleted(result.task2.completed)
      })
    }
  }, [])

  async function handleCheck() {
    let test = (selectedOptions.every(
      (e,i) => e === answers[i]) && selectedOptions.length > 0)

    let obj = await window.electron.ipcRenderer.invoke('readJson')
    let task = obj.task2

    if (test){
      setCompleted(true)
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task2:{
          bestTime: time + 1,
          completed: true,
          tries: task.tries + 1
        },
        courseCompletion: obj.courseCompletion + 12.5}
      )
    } else {
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task2:{
          bestTime: task.bestTime,
          completed: task.completed,
          tries: task.tries + 1
        }}
      )
      setTaskMistaken()
    }
  }

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.2"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake} task={"/chapterOne/tasks/taskTwo/info"}>
        <div className={styles.column}>
          {
            images.map((img, i) => (
              <div className={styles.block}>
                <TaskImage src={img} width={"100%"}/>
                <div className={styles.select}>
                  <SelectField
                    options={options}
                    index={i}
                    onChange={handleChoice}
                    placeholder={(completed) ? answers[i] : "Виберіть тип функції"}
                    minWidth={"300px"}
                  />
                </div>
              </div>
            ))
          }
        </div>
      </TaskBody>
    </div>
  );
};



export default Task;
