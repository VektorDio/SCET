import React, { useContext, useState } from 'react';
import TaskMenuColumn from '../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./eighthTask.module.css"
import useTask from '../../../../../../../hooks/useTask';
import MatrixBlock from '../../../../../../components/taskPageElements/matrixBlock';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import { Equation } from 'react-equation';
import { Font } from '../../../../../../App';
const Task = () => {
  const fontSize = useContext(Font)
  const [selectedOptions, setSelectedOptions] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ])

  const taskId = "task8"

  const answers = [
    [63, 1, 0, 0],
    [90, 14, 50, 0],
    [0, 63, 1, 0],
    [0, 90, 14, 50]
  ]

  const taskSolved = selectedOptions.map((row, y) => {
    return row.every((e, x) => e === answers[y][x])
  }).reduce((acc, el) => acc && el)
  function handleArrayChange(choice, x, y) {
    let buf = [...selectedOptions]
    const choiceInt = parseInt(choice)
    buf[y][x] = (!isNaN(choiceInt)) ? choiceInt : ""
    setSelectedOptions([...buf])
  }

  function setTaskSolved() {
    setSelectedOptions([...answers])
  }

  const {taskState:{time, completed, mistake}, handleCheck} = useTask({ taskId, setTaskSolved, taskSolved })

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.8"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake} task={"/tasks/8/info"}>
        <ChapterParagraph fontSize={fontSize}>
          Побудуйте визначник Гурвіца для системи, яка описується наступною передавальною функцією замкнутої системи: <br></br>
          <Equation className={styles.formula} value={" W(s) = 50/(s(5s+1)(3s+1)(6s+1)+50)"} /> {/* 90s^4+63s^3+14s^2+s+50 */}
        </ChapterParagraph>
        <MatrixBlock array={selectedOptions} setArray={handleArrayChange}/>
      </TaskBody>
    </div>
  );
};

export default Task;
