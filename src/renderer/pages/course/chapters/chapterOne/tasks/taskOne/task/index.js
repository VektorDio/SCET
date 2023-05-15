import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from "./firstTask.module.css"
import TextBlock from '../../../../../../../components/taskPageElements/taskText/textBlock';
import Xarrow from 'react-xarrows';
import UpperLabel from '../../../../../../../components/taskPageElements/upperLabel';
import HiddenSelect from '../../../../../../../components/taskPageElements/hiddenSelect';
const Task = () => {
  const [start, setStart] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [completed, setCompleted] = useState()
  const [mistake, setMistake] = useState(false)

  const [xtBlock, setXTBlock] = useState(("..."))
  const [ftBlock, setFTBlock] = useState(("..."))
  const [ytBlock, setYTBlock] = useState(("..."))
  const [utBlock, setUTBlock] = useState(("..."))
  const [puBlock, setPUBlock] = useState(("..."))
  const [ouBlock, setOUBlock] = useState(("..."))

  const options = ["x(t)", "f(t)", "y(t)", "u(t)", "ПУ", "ОУ"]

  useEffect(() => {
    if (completed === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => {
        setCompleted(result.task1.completed)
        if (result.task1.completed) {
          setTaskSolved()
        }
      })
    }
  })

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

  function setTaskSolved() {
    setXTBlock("x(t)")
    setFTBlock("f(t)")
    setYTBlock("y(t)")
    setUTBlock("u(t)")
    setPUBlock("ПУ")
    setOUBlock("ОУ")
  }

  async function handleCheck() {
    let test = (xtBlock === "x(t)") &&
      (ftBlock === "f(t)") &&
      (ytBlock === "y(t)") &&
      (utBlock === "u(t)") &&
      (puBlock === "ПУ") &&
      (ouBlock === "ОУ")

    let obj = await window.electron.ipcRenderer.invoke('readJson')
    let task = obj.task1

    if (test){
      setCompleted(true)
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task1:{
          bestTime: time + 1,
          completed: true,
          tries: task.tries + 1
        }}
      )
    } else {
      window.electron.ipcRenderer.sendMessage('writeJson', {
        task1:{
          tries: task.tries + 1
        }}
      )
      setTaskMistaken()
    }
  }

  return (
    <div className={styles.container} >
      <TaskMenuColumn time={time} completed={completed} taskNumber={"1.1"}>
        В цому завданні необхідно обрати потрібну відповідь із випадаючого списку.
      </TaskMenuColumn>
      <TaskBody handleCheck={handleCheck} completed={completed} mistake={mistake}>

        <TextBlock id={"xt"} top={"40%"} left={"40%"} round={true} >
          <HiddenSelect
            options={options}
            text={xtBlock}
            onClick={setXTBlock}
          />
        </TextBlock>

        <TextBlock id={"ft"} top={"20%"} left={"65%"} round={true}>
          <HiddenSelect
            options={options}
            text={ftBlock}
            onClick={setFTBlock}
          />
        </TextBlock>

        <TextBlock id={"yt"} top={"40%"} left={"75%"} round={true}>
          <HiddenSelect
            options={options}
            text={ytBlock}
            onClick={setYTBlock}
          />
        </TextBlock>

        <TextBlock id={"pu"} top={"40%"} left={"50%"} >
          <HiddenSelect
            options={options}
            text={puBlock}
            onClick={setPUBlock}
          />
        </TextBlock>

        <TextBlock id={"ou"} top={"40%"} left={"65%"}>
          <HiddenSelect
            options={options}
            text={ouBlock}
            onClick={setOUBlock}
          />
        </TextBlock>

        <Xarrow start={'xt'} end={'pu'} headSize={3}/>
        <Xarrow start={'ft'} end={'ou'} headSize={3}/>
        <Xarrow start={'ou'} end={'yt'} headSize={3}/>
        <Xarrow start={'pu'} end={'ou'} headSize={3}
                label={
          <UpperLabel>
            <HiddenSelect
              options={options}
              text={utBlock}
              onClick={setUTBlock}
            />
          </UpperLabel>
        }
        />
      </TaskBody>
    </div>
  );
};

export default Task;
