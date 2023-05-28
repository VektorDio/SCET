import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./fourthTask.module.css"
import { DndContext } from '@dnd-kit/core';
import DroppableBlock from '../../../../../../../components/taskPageElements/dndElements/droppableBlock';
import { restrictToFirstScrollableAncestor} from '@dnd-kit/modifiers';
import { Xwrapper } from 'react-xarrows';
import DraggableMarker from '../../../../../../../components/taskPageElements/dndElements/draggableMarker';
const Task = () => {
  const [start, setStart] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [completed, setCompleted] = useState()
  const [mistake, setMistake] = useState(false)

  const options = ['','','','','','']
  const answers = ['drop2', 'drop5', 'drop1', 'drop1', 'drop3', 'drop2']
  const [arrowEnds, setArrowEnds] = useState(Array(options.length));

  useEffect(() => {
    if (completed === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => {
        setCompleted(result.task4.completed)
        if (result.task4.completed){
          setSolved()
        }
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
    let test = arrowEnds.every((e, i ) => e === answers[i]) && arrowEnds[0] !== undefined

    let obj = await window.electron.ipcRenderer.invoke('readJson')
    let task = obj.task4

    if (test){
      setCompleted(true)
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task4:{
          bestTime: time + 1,
          completed: true,
          tries: task.tries + 1
        },
        courseCompletion: obj.courseCompletion + 12.5}
      )

    } else {
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task4:{
          bestTime: task.bestTime,
          completed: task.completed,
          tries: task.tries + 1
        }}
      )
      setTaskMistaken()
    }
  }

  console.log(arrowEnds)
  console.log(answers)


  function handleDragEnd(event) {
    const {active, over} = event;
    setArrowEnds(prev => {
      let buf = [...prev]
      buf[active.data.current.arrayId] =
        ((over) && (active.data.current.start !== over.id)) ? over.id : ""
      return buf
    })
  }

  function setSolved() {
    setArrowEnds(['drop2', 'drop5', 'drop1', 'drop1', 'drop3', 'drop2'])
  }

  console.log(arrowEnds)

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.4"}>
        В цому завданні необхідно перемістити блоки в потрібні контейнери.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake} task={"/chapterOne/tasks/taskFour/info"}>
        <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToFirstScrollableAncestor]}>
          {
            <Xwrapper>
              <DroppableBlock id={"drop1"} top={"40%"} left={"43%"}>
                <DraggableMarker id={"0"} start={"drop1"} end={arrowEnds[0]} position={"right"}/>
                Р
              </DroppableBlock>

              <DroppableBlock id={"drop2"} top={"40%"} left={"62%"}>
                <DraggableMarker id={"1"} start={"drop2"} end={arrowEnds[1]} position={"right"}/>
                ОР
              </DroppableBlock>

              <DroppableBlock id={"drop3"} top={"15%"} left={"43%"}>
                <DraggableMarker id={"2"} start={"drop3"} end={arrowEnds[2]} position={"bottom"}/>
                КК
              </DroppableBlock>

              <DroppableBlock id={"drop4"} top={"40%"} left={"25%"} round={true}>
                <DraggableMarker id={"3"} start={"drop4"} end={arrowEnds[3]} position={"right"}/>
                x(t)
              </DroppableBlock>
              <DroppableBlock id={"drop5"} top={"40%"} left={"78%"} round={true}>
                y(t)
              </DroppableBlock>
              <DroppableBlock id={"drop6"} top={"15%"} left={"62%"} round={true}>
                <DraggableMarker id={"4"} start={"drop6"} end={arrowEnds[4]} position={"left"}/>
                <DraggableMarker id={"5"} start={"drop6"} end={arrowEnds[5]} position={"bottom"}/>
                f(t)
              </DroppableBlock>


            </Xwrapper>
          }
        </DndContext>
      </TaskBody>
    </div>
  );
};

export default Task;
