import React, { useContext, useMemo, useState } from 'react';
import TaskMenuColumn from '../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./seventhTask.module.css"
import SelectField from '../../../../../../components/taskPageElements/selectField';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import DiagramBlock from '../../../../../../components/taskPageElements/diagramBlock';
import { Equation } from 'react-equation';
import useTask from '../../../../../../../hooks/useTask';
import { Font } from '../../../../../../App';
const Task = () => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const taskId = "task7"
  const fontSize = useContext(Font)
  const answers = ["0", "+20", "0","-20","-40"]

  const taskSolved = (selectedOptions.every(
    (e,i) => e === answers[i]) && selectedOptions.length > 0)

  const optionsLabels = ["+40", "+20", "0", "-20", "-40"]
  const options = useMemo(() => {
    return optionsLabels.map((e, i) => ({
      value: i,
      label: e,
    }))
  },[])

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

  function handleChoice(choice, index) {
    let buf = [...selectedOptions]
    buf[index] = choice
    setSelectedOptions([...buf])
  }

  function setTaskSolved(){
    setSelectedOptions([...answers])
  }

  const {taskState:{time, completed, mistake}, handleCheck} = useTask({ taskId, setTaskSolved, taskSolved })

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.7"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake} task={"/tasks/7/info"}>
        <ChapterParagraph fontSize={fontSize}>
          Побудуйте логарифмічно-амплітудну характеристику для системи, яка описується наступною передавальною функцією: <br></br>
          <Equation className={styles.formula} value={" W(s) = (100(5s+1))/((0.1s+1)(0.2s+1)(0.04s+1))"} />
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
