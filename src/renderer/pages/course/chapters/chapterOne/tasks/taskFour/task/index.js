import React, { useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./fourthTask.module.css"
import { DndContext } from '@dnd-kit/core';
import DroppableBlock from '../../../../../../../components/taskPageElements/dndElements/droppableBlock';
import { restrictToFirstScrollableAncestor} from '@dnd-kit/modifiers';
import { Xwrapper } from 'react-xarrows';
import DraggableMarker from '../../../../../../../components/taskPageElements/dndElements/draggableMarker';
import useTask from '../../../../../../../../hooks/useTask';
const Task = () => {
  const options = ['','','','','','']
  const answers = ['drop2', 'drop5', 'drop1', 'drop1', 'drop3', 'drop2']
  const [arrowEnds, setArrowEnds] = useState(Array(options.length));

  const taskSolved = arrowEnds.every((e, i ) => e === answers[i]) && arrowEnds[0] !== undefined
  const taskId = 'task4'
  function handleDragEnd(event) {
    const {active, over} = event;
    setArrowEnds(prev => {
      let buf = [...prev]
      buf[active.data.current.arrayId] =
        ((over) && (active.data.current.start !== over.id)) ? over.id : ""
      return buf
    })
  }
  function setTaskSolved() {
    setArrowEnds(['drop2', 'drop5', 'drop1', 'drop1', 'drop3', 'drop2'])
  }

  const {taskState:{time, completed, mistake}, handleCheck} = useTask({ taskId, setTaskSolved, taskSolved })

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.4"}>
        В цому завданні потрібно намалювати стрілки між потрібними блоками, використовуючи маркери.
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
