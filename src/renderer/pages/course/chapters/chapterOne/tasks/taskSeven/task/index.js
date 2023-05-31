import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./seventhTask.module.css"
import SelectField from '../../../../../../../components/taskPageElements/selectField';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import DiagramBlock from '../../../../../../../components/taskPageElements/diagramBlock';
import { Equation } from 'react-equation';
const Task = () => {
  const [start, setStart] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [completed, setCompleted] = useState()
  const [mistake, setMistake] = useState(false)

  const [selectedOptions, setSelectedOptions] = useState([])

  const answers = ["0", "+20", "0","-20","-40"]
  const optionsLabels = ["+40", "+20", "0", "-20", "-40"]

  const options = optionsLabels.map((e, i) => ({
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
        setCompleted(result.task7.completed)
        if (result.task7.completed){
          setSolved()
        }
      })
    }
  }, [])

  function setSolved(){
    setSelectedOptions([...answers])
  }

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
    let task = obj.task7

    if (test){
      setCompleted(true)
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task7:{
          bestTime: time + 1,
          completed: true,
          tries: task.tries + 1
        },
        courseCompletion: obj.courseCompletion + 12.5}
      )
    } else {
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task7:{
          bestTime: task.bestTime,
          completed: task.completed,
          tries: task.tries + 1
        }}
      )
      setTaskMistaken()
    }
  }

  const phasePoints = [0.2, 5, 10, 25, 100]
  const startPoint = 20 * Math.log10(100) //20log(k) = 20log(100) = 40

  const data = [
    {x: 0.1, y: startPoint},
  ]

  phasePoints.forEach((e, i) => {
    const angle = parseInt(selectedOptions[i])
    const y = data[i].y + (angle * Math.log10(e/data[i].x))
    data.push({x: e, y: y})
  })

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.7"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake} task={"/chapterOne/tasks/taskSeven/info"}>
        <ChapterParagraph>
          Побудуйте логарифмічно-амплітудну характеристику для системи, яка описується наступною передавальною функцією: <br></br>
          <Equation value={" W(s) = (100(5s+1))/((0.1s+1)(0.2s+1)(0.04s+1))"} />
        </ChapterParagraph>
        <div className={styles.column}>
          <DiagramBlock data={data}>
            {
              answers.map((e, i) => (
                <SelectField
                  onChange={handleChoice}
                  options={options}
                  key={i}
                  index={i}
                  border={true}
                  placeholder={(completed) ? answers[i] : "Нахил"}
                  minWidth={"125px"}
                />
              ))
            }
          </DiagramBlock>
        </div>
      </TaskBody>
    </div>
  );
};

export default Task;
