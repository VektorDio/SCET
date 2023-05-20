import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./thirdTask.module.css"
import { DndContext } from '@dnd-kit/core';
import DraggableBlock from '../../../../../../../components/taskPageElements/dndElements/draggableBlock';
import DroppableBlock from '../../../../../../../components/taskPageElements/dndElements/droppableBlock';
import { restrictToFirstScrollableAncestor} from '@dnd-kit/modifiers';
import { v4 as uuidv4 } from 'uuid';
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

    console.log(draggable)
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
  const [draggable, setDraggable] = useState(options.map((e, index) => (
    <DraggableBlock key={index} id={uuidv4()}>
      {e}
    </DraggableBlock>
  )))
  const swapElements = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };
  function handleDragEnd(event) {
    const {active, over} = event;

    const dragId = active.id
    const dropIndex = over ? over.id - 1 : null
    const isInDraggable = draggable.some(e => e?.props?.id === dragId)

    if (over === null){
      if (!isInDraggable){
        const draggedIndex = children.findIndex(e => e?.props?.id === dragId)
        setChildren(prev => {
          const buf = [...prev]
          buf[draggedIndex] = undefined
          return buf
        })
        setDraggable(prev => {
          const buf = [...prev]
          buf.push({ ...children[draggedIndex] })
          return buf
        })
      }
    } else {
      //const element = draggable.find(e => e?.props?.id === dragId) || children.find(e => e?.props?.id === dragId)
      const isDroppableEmpty = children[dropIndex] === undefined
      if (isDroppableEmpty){
        const draggedIndex = draggable.findIndex(e => e?.props?.id === dragId)
        if (draggedIndex !== -1){

          setChildren(prev => {
            const buf = [...prev]
            buf[dropIndex] = {...draggable[draggedIndex]}
            return buf
          })

          setDraggable(prev => {
            const buf = [...prev]
            buf.splice(draggedIndex, 1)
            return buf
          })
        } else {
          const draggedIndex = children.findIndex(e => e?.props?.id === dragId)
          setChildren(prev => {
            const buf = [...prev]
            buf[dropIndex] = {...children[draggedIndex]}
            buf[draggedIndex] = undefined
            return buf
          })
        }
      } else {
        if (!isInDraggable){
          setChildren(prev => {
            const buf = [...prev]
            swapElements(buf, dropIndex, children.findIndex(e => e?.props?.id === dragId))
            return buf
          })
        } else {
          const draggedIndex = draggable.findIndex(e => e?.props?.id === dragId)
          const draggedElement = {...draggable[draggedIndex]}
          const droppedElement = {...children[dropIndex]}
          setChildren(prev => {
            const buf = [...prev]
            buf[dropIndex] = draggedElement
            return buf
          })
          setDraggable(prev => {
            const buf = [...prev]
            buf.splice(draggedIndex, 1)
            buf.push(droppedElement)
            return buf
          })
        }
      }
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
            {draggable}
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
