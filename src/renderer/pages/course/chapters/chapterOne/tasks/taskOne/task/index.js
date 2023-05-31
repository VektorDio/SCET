import React, { useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./firstTask.module.css"
import TextBlock from '../../../../../../../components/taskPageElements/textBlock';
import Xarrow from 'react-xarrows';
import UpperLabel from '../../../../../../../components/taskPageElements/upperLabel';
import HiddenSelect from '../../../../../../../components/taskPageElements/hiddenSelect';
import useTask from '../../../../../../../../hooks/useTask';
const Task = () => {
  const [blocks, setBlocks] = useState(["...", "...", "...", "...", "...", "..."])

  const taskId = 'task1'
  const options = ["x(t)", "f(t)", "y(t)", "u(t)", "ПУ", "ОУ"]
  const answers = ["x(t)", "f(t)", "y(t)", "ПУ", "ОУ", "u(t)"]

  const taskSolved = blocks.every((e, i) => e === answers[i])

  function setTaskSolved() {
    setBlocks([...answers])
  }

  function handleBlockChange(option, index) {
    setBlocks(prev => {
      const buf = [...prev]
      buf[index] = option
      return [...buf]
    })
  }

  const {taskState:{time, completed, mistake}, handleCheck} = useTask({ taskId, setTaskSolved, taskSolved })

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.1"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake} task={"/chapterOne/tasks/taskOne/info"}>

        <TextBlock id={"xt"} top={"40%"} left={"40%"} round={true} >
          <HiddenSelect
            options={options}
            text={blocks[0]}
            index={0}
            onClick={handleBlockChange}
          />
        </TextBlock>

        <TextBlock id={"ft"} top={"20%"} left={"65%"} round={true}>
          <HiddenSelect
            options={options}
            text={blocks[1]}
            index={1}
            onClick={handleBlockChange}
          />
        </TextBlock>

        <TextBlock id={"yt"} top={"40%"} left={"75%"} round={true}>
          <HiddenSelect
            options={options}
            text={blocks[2]}
            index={2}
            onClick={handleBlockChange}
          />
        </TextBlock>

        <TextBlock id={"pu"} top={"40%"} left={"50%"} >
          <HiddenSelect
            options={options}
            text={blocks[3]}
            index={3}
            onClick={handleBlockChange}
          />
        </TextBlock>

        <TextBlock id={"ou"} top={"40%"} left={"65%"}>
          <HiddenSelect
            options={options}
            text={blocks[4]}
            index={4}
            onClick={handleBlockChange}
          />
        </TextBlock>

        <Xarrow start={'xt'} end={'pu'} headSize={3}/>
        <Xarrow start={'ft'} end={'ou'} headSize={3}/>
        <Xarrow start={'ou'} end={'yt'} headSize={3}
        />
        <Xarrow start={'pu'} end={'ou'} headSize={3}
                labels={
          <UpperLabel>
            <HiddenSelect
              options={options}
              index={5}
              text={blocks[5]}
              onClick={handleBlockChange}
            />
          </UpperLabel>
        }
        />
      </TaskBody>
    </div>
  );
};

export default Task;
