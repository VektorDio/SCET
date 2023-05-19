import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./thirdTask.module.css"
import { DndContext } from '@dnd-kit/core';
import DraggableBlock from '../../../../../../../components/taskPageElements/dndElements/draggableBlock';
import DroppableBlock from '../../../../../../../components/taskPageElements/dndElements/droppableBlock';
import { restrictToFirstScrollableAncestor} from '@dnd-kit/modifiers';
const Task = () => {
  const [start, setStart] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [mistake, setMistake] = useState(false)

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
    let test = false

    console.log(draggableMarkup)
    console.log(children)
    console.log(children[0] === undefined)

    let obj = await window.electron.ipcRenderer.invoke('readJson')
    let task = obj.task3

    if (test){
      setCompleted(true)
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task3:{
          bestTime: time + 1,
          completed: true,
          tries: task.tries + 1
        }}
      )
    } else {
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task3:{
          bestTime: task.bestTime,
          completed: task.completed,
          tries: task.tries + 1
        }}
      )
      setTaskMistaken()
    }
  }

  const options = ["1", "2", "3"]

  const [children, setChildren] = useState(Array(options.length));
  const [draggableMarkup, setDraggableMarkup] = useState(options.map((e, index) => (
    <DraggableBlock key={index+1} id={index+1}>
      {e}
    </DraggableBlock>
  )))

  function handleDragEnd(event) {
    const {active, over} = event;

    const dragIndex = active.id - 1
    const dropIndex = over ? over.id - 1 : null

    if (over === null){
      setDraggableMarkup(prev => {
        return prev.map((e)=>{
          if (e.props.id === dragIndex +1) {
            return (
              <DraggableBlock key={ dragIndex +1} id={ dragIndex +1}>
                {options[dragIndex]}
              </DraggableBlock>
            )
          } else {
            return e
          }
        })
      })
      let buf = [...children]
      buf[dropIndex] = undefined
      setChildren([...buf])
    } else {
      let buf = [...children]
      buf[dropIndex] = {...draggableMarkup[dragIndex]}
      setChildren([...buf])

      let buf1 = [...draggableMarkup]
      buf1[dragIndex] = (<div id={dragIndex+1}> </div>)
      setDraggableMarkup([...buf1])
    }

    console.log("active: " + active.id + " " + "over: " + over)
  }

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.3"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake} task={"/chapterOne/tasks/taskThree/info"}>
        <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToFirstScrollableAncestor]}>
          <div className={styles.draggableContainer}>
            {draggableMarkup}
          </div>
          {
            <>
              <DroppableBlock id={1} top={"30%"}>
                {children[0]}
              </DroppableBlock>
              <DroppableBlock id={2} top={"42%"}>
                {children[1]}
              </DroppableBlock>
              <DroppableBlock id={3} top={"54%"}>
                {children[2]}
              </DroppableBlock>
            </>
          }
        </DndContext>
      </TaskBody>
    </div>
  );
};

export default Task;
