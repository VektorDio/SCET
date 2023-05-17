import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./secondTask.module.css"
import TaskImage from '../../../../../../../components/taskPageElements/taskImage';
import acceleration from '../../../../../../../../../assets/diagrams/acceleration.png';
import dirac from '../../../../../../../../../assets/diagrams/dirac.png';
import linear from '../../../../../../../../../assets/diagrams/linear.png';
import step from '../../../../../../../../../assets/diagrams/step.png';
import sin from '../../../../../../../../../assets/diagrams/sin.png';
import SelectField from '../../../../../../../components/taskPageElements/selectField';
const Task = () => {
  const [start, setStart] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [completed, setCompleted] = useState()
  const [mistake, setMistake] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  const answers = ['Східчаста функція',
    'Одинична імпульсна функція',
    'Лінійний зростаючий сигнал',
    'Сигнал з постійним прискоренням',
    'Гармонійний сигнал'
  ]

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
        }}
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
          <div className={styles.section}>
            <div className={styles.block}>
              <TaskImage src={step} width={"100%"}/>
              <div className={styles.select}>
                <SelectField
                  options={options}
                  index={0}
                  onChange={handleChoice}
                  placeholder={(completed) ? answers[0] : "Виберіть тип функції"}
                  minWidth={"300px"}
                />
              </div>
            </div>
            <div className={styles.block}>
              <TaskImage src={dirac} width={"100%"}/>
              <div className={styles.select}>
                <SelectField
                  options={options}
                  index={1}
                  onChange={handleChoice}
                  placeholder={(completed) ? answers[1] : "Виберіть тип функції"}
                  minWidth={"300px"}
                />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.block}>
              <TaskImage src={linear} width={"100%"}/>
              <div className={styles.select}>
                <SelectField
                  options={options}
                  index={2}
                  onChange={handleChoice}
                  placeholder={(completed) ? answers[2] : "Виберіть тип функції"}
                  minWidth={"300px"}
                />
              </div>
            </div>
            <div className={styles.block}>
              <TaskImage src={acceleration} width={"100%"}/>
              <div className={styles.select}>
                <SelectField
                  options={options}
                  index={3}
                  onChange={handleChoice}
                  placeholder={(completed) ? answers[3] : "Виберіть тип функції"}
                  minWidth={"300px"}
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.block}>
              <TaskImage src={sin} width={"100%"}/>
              <div className={styles.select}>
                <SelectField
                  options={options}
                  index={4}
                  onChange={handleChoice}
                  placeholder={(completed) ? answers[4] : "Виберіть тип функції"}
                  minWidth={"300px"}
                />
              </div>
            </div>
          </div>
        </div>
      </TaskBody>
    </div>
  );
};

export default Task;
