import React, { useEffect, useMemo, useState } from 'react';
import { Equation } from 'react-equation';
import TaskMenuColumn from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskBody';
import styles from './seventhTask.module.css';
import SelectField from '../../../../../../renderer/components/taskPageElements/selectField';
import ChapterParagraph from '../../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import DiagramBlock from '../../../../../../renderer/components/taskPageElements/diagramBlock';
import useTask from '../../../../../../hooks/useTask';

function Task() {
  const taskId = 'task7';
  const answers = ['0', '+20', '0', '-20', '-40'];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const isTaskSolved =
    selectedOptions.every((e, i) => e === answers[i]) &&
    selectedOptions.length === answers.length;

  const { time, completed, mistake, handleAttempt } = useTask({ taskId });

  useEffect(() => {
    if (completed) {
      setSelectedOptions([...answers]);
    }
  }, [completed]);

  function handleCheck() {
    handleAttempt(isTaskSolved);
  }

  const optionsLabels = ['+40', '+20', '0', '-20', '-40'];

  const options = useMemo(() => {
    return optionsLabels.map((e, i) => ({
      value: i,
      label: e,
    }));
  }, []);

  const phasePoints = [0.2, 5, 10, 25, 100];
  const startPoint = 20 * Math.log10(100); // 20log(k) = 20log(100) = 40

  const data = [{ x: 0.1, y: startPoint }];

  phasePoints.forEach((e, i) => {
    const angle = parseInt(selectedOptions[i], 10);
    const y = data[i].y + angle * Math.log10(e / data[i].x);
    data.push({ x: e, y });
  });

  function handleChoice(choice, index) {
    const buf = [...selectedOptions];
    buf[index] = choice;
    setSelectedOptions([...buf]);
  }

  return (
    <div className={styles.container}>
      <TaskMenuColumn time={time} completed={completed} taskNumber="1.7">
        В цому завданні необхідно обрати потрібну відповідь із випадаючого
        списку.
      </TaskMenuColumn>
      <TaskBody
        handleCheck={handleCheck}
        completed={completed}
        mistake={mistake}
        task="/tasks/7/info"
      >
        <ChapterParagraph>
          Побудуйте логарифмічно-амплітудну характеристику для системи, яка
          описується наступною передавальною функцією: <br />
          <Equation
            className={styles.formula}
            value=" W(s) = (100(5s+1))/((0.1s+1)(0.2s+1)(0.04s+1))"
          />
        </ChapterParagraph>
        <div className={styles.column}>
          <DiagramBlock data={data}>
            {answers.map((e, i) => (
              <SelectField
                onChange={handleChoice}
                options={options}
                key={i}
                index={i}
                border
                placeholder={completed ? answers[i] : 'Нахил'}
                minWidth="125px"
              />
            ))}
          </DiagramBlock>
        </div>
      </TaskBody>
    </div>
  );
}

export default Task;
