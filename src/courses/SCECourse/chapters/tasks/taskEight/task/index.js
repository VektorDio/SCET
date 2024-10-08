import React, { useEffect, useState } from 'react';
import { Equation } from 'react-equation';
import TaskMenuColumn from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskBody';
import styles from './eighthTask.module.css';
import useTask from '../../../../../../hooks/useTask';
import MatrixBlock from '../../../../../../renderer/components/taskPageElements/matrixBlock';
import ChapterParagraph from '../../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';

function Task() {
  const taskId = 'task8';
  const [selectedOptions, setSelectedOptions] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const answers = [
    [63, 1, 0, 0],
    [90, 14, 50, 0],
    [0, 63, 1, 0],
    [0, 90, 14, 50],
  ];
  const isTaskSolved = selectedOptions
    .map((row, y) => {
      return row.every((e, x) => e === answers[y][x]);
    })
    .reduce((acc, el) => acc && el);

  function handleArrayChange(choice, x, y) {
    const buf = [...selectedOptions];
    const choiceInt = parseInt(choice, 10);
    buf[y][x] = !Number.isNaN(choiceInt) ? choiceInt : '';
    setSelectedOptions([...buf]);
  }

  const { time, completed, mistake, handleAttempt } = useTask({ taskId });

  useEffect(() => {
    if (completed) {
      setSelectedOptions([...answers]);
    }
  }, [completed]);

  function handleCheck() {
    handleAttempt(isTaskSolved);
  }

  return (
    <div className={styles.container}>
      <TaskMenuColumn time={time} completed={completed} taskNumber="1.8">
        В цому завданні необхідно обрати потрібну відповідь із випадаючого
        списку.
      </TaskMenuColumn>
      <TaskBody
        handleCheck={handleCheck}
        completed={completed}
        mistake={mistake}
        task="/tasks/8/info"
      >
        <ChapterParagraph>
          Побудуйте визначник Гурвіца для системи, яка описується наступною
          передавальною функцією замкнутої системи: <br />
          <Equation
            className={styles.formula}
            value=" W(s) = 50/(s(5s+1)(3s+1)(6s+1)+50)"
          />{' '}
          {/* 90s^4+63s^3+14s^2+s+50 */}
        </ChapterParagraph>
        <MatrixBlock array={selectedOptions} setArray={handleArrayChange} />
      </TaskBody>
    </div>
  );
}

export default Task;
