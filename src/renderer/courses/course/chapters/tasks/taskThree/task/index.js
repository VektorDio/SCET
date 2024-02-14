import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers';
import { v4 as uuidv4 } from 'uuid';
import Xarrow, { Xwrapper } from 'react-xarrows';
import TaskMenuColumn from '../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from './thirdTask.module.css';
import DraggableBlock from '../../../../../../components/taskPageElements/dndElements/draggableBlock';
import DroppableBlock from '../../../../../../components/taskPageElements/dndElements/droppableBlock';
import TextBlock from '../../../../../../components/taskPageElements/textBlock';
import useTask from '../../../../../../../hooks/useTask';

function Task() {
  const options = ['Підсилювач', 'Електродвигун', 'Диск', 'Датчик'];
  const answers = ['Підсилювач', 'Електродвигун', 'Диск', 'Датчик'];
  const [draggable, setDraggable] = useState(
    options.map((e, index) => (
      <DraggableBlock key={index} id={uuidv4()}>
        {e}
      </DraggableBlock>
    ))
  );
  const [children, setChildren] = useState(Array(options.length));

  const taskId = 'task3';

  console.log(children);
  const taskSolved = children.every(
    (e, i) => e && e.props.children === answers[i]
  );
  const swapElements = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };
  function handleDragEnd(event) {
    const { active, over } = event;

    const dragId = active.id;
    const dropIndex = over ? over.id - 1 : null;
    const isInDraggable = draggable.some((e) => e?.props?.id === dragId);

    if (over === null) {
      if (!isInDraggable) {
        const draggedIndex = children.findIndex((e) => e?.props?.id === dragId);
        setChildren((prev) => {
          const buf = [...prev];
          buf[draggedIndex] = undefined;
          return buf;
        });
        setDraggable((prev) => {
          const buf = [...prev];
          buf.push({ ...children[draggedIndex] });
          return buf;
        });
      }
    } else {
      const isDroppableEmpty = children[dropIndex] === undefined;
      if (isDroppableEmpty) {
        const draggedIndex = draggable.findIndex(
          (e) => e?.props?.id === dragId
        );
        if (draggedIndex !== -1) {
          setChildren((prev) => {
            const buf = [...prev];
            buf[dropIndex] = { ...draggable[draggedIndex] };
            return buf;
          });

          setDraggable((prev) => {
            const buf = [...prev];
            buf.splice(draggedIndex, 1);
            return buf;
          });
        } else {
          const draggedIndex = children.findIndex(
            (e) => e?.props?.id === dragId
          );
          setChildren((prev) => {
            const buf = [...prev];
            buf[dropIndex] = { ...children[draggedIndex] };
            buf[draggedIndex] = undefined;
            return buf;
          });
        }
      } else if (!isInDraggable) {
        setChildren((prev) => {
          const buf = [...prev];
          swapElements(
            buf,
            dropIndex,
            children.findIndex((e) => e?.props?.id === dragId)
          );
          return buf;
        });
      } else {
        const draggedIndex = draggable.findIndex(
          (e) => e?.props?.id === dragId
        );
        const draggedElement = { ...draggable[draggedIndex] };
        const droppedElement = { ...children[dropIndex] };
        setChildren((prev) => {
          const buf = [...prev];
          buf[dropIndex] = draggedElement;
          return buf;
        });
        setDraggable((prev) => {
          const buf = [...prev];
          buf.splice(draggedIndex, 1);
          buf.push(droppedElement);
          return buf;
        });
      }
    }
  }

  function setTaskSolved() {
    setChildren([...draggable]);
    setDraggable(null);
  }

  const {
    taskState: { time, completed, mistake },
    handleCheck,
  } = useTask({ taskId, setTaskSolved, taskSolved });

  return (
    <div className={styles.container}>
      <TaskMenuColumn time={time} completed={completed} taskNumber="1.3">
        В цому завданні необхідно перемістити блоки в потрібні контейнери.
      </TaskMenuColumn>
      <TaskBody
        handleCheck={handleCheck}
        completed={completed}
        mistake={mistake}
        task="/tasks/3/info"
      >
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToFirstScrollableAncestor]}
        >
          <div className={styles.draggableContainer}>{draggable}</div>
          <>
            <Xwrapper>
              <DroppableBlock id="1" top="30%" left="43%" label="ПУ">
                {children[0]}
              </DroppableBlock>
              <DroppableBlock id="2" top="30%" left="57%" label="ВП">
                {children[1]}
              </DroppableBlock>
              <DroppableBlock id="3" top="30%" left="71%" label="ОУ">
                {children[2]}
              </DroppableBlock>
              <DroppableBlock id="4" top="48%" left="57%" label="Датчик">
                {children[3]}
              </DroppableBlock>

              <TextBlock id="dv" top="34.4%" left="22%">
                Бажана швидкість
              </TextBlock>
              <TextBlock id="-" top="35%" left="35%" round>
                -
              </TextBlock>
              <TextBlock id="av" top="34.4%" left="88%">
                Дійсна швидкість
              </TextBlock>

              <Xarrow start="dv" end="-" headSize={3} />
              <Xarrow start="-" end="1" headSize={3} />
              <Xarrow start="1" end="2" headSize={3} />
              <Xarrow start="2" end="3" headSize={3} />
              <Xarrow start="3" end="av" headSize={3} />
              <Xarrow
                start="4"
                end="-"
                path="grid"
                endAnchor="bottom"
                headSize={3}
              />
              <Xarrow
                start="av"
                end="4"
                path="grid"
                startAnchor="bottom"
                headSize={3}
              />
            </Xwrapper>
          </>
        </DndContext>
      </TaskBody>
    </div>
  );
}

export default Task;
