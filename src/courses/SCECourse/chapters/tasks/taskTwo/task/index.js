import React, { useMemo, useState } from 'react';
import TaskMenuColumn from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskBody';
import styles from './secondTask.module.css';
import TaskImage from '../../../../../../renderer/components/taskPageElements/taskImage';
import SelectField from '../../../../../../renderer/components/taskPageElements/selectField';
import acceleration from '../../../../../../../assets/diagrams/acceleration.png';
import dirac from '../../../../../../../assets/diagrams/dirac.png';
import linear from '../../../../../../../assets/diagrams/linear.png';
import step from '../../../../../../../assets/diagrams/step.png';
import sin from '../../../../../../../assets/diagrams/sin.png';
import useTask from '../../../../../../hooks/useTask';

function Task() {
  const taskId = 'task2';
  const answers = [
    'Східчаста функція',
    'Одинична імпульсна функція',
    'Лінійний зростаючий сигнал',
    'Сигнал з постійним прискоренням',
    'Гармонійний сигнал',
  ];
  const images = [step, dirac, linear, acceleration, sin];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const { time, completed, mistake, handleAttempt } = useTask({ taskId });

  const isTaskSolved =
    selectedOptions.every((e, i) => e === answers[i]) &&
    selectedOptions.length > 0;

  function handleCheck() {
    handleAttempt(isTaskSolved)
  }

  const options = useMemo(() => {
    return answers.map((e, i) => ({
      value: i,
      label: e,
    }));
  }, []);

  function handleChoice(choice, index) {
    const buf = [...selectedOptions];
    buf[index] = choice;
    setSelectedOptions([...buf]);
  }

  return (
    <div className={styles.container}>
      <TaskMenuColumn time={time} completed={completed} taskNumber="1.2">
        В цому завданні необхідно обрати потрібну відповідь із випадаючого
        списку.
      </TaskMenuColumn>
      <TaskBody
        handleCheck={handleCheck}
        completed={completed}
        mistake={mistake}
        task="/tasks/2/info"
      >
        <div className={styles.column}>
          {images.map((img, i) => (
            <div className={styles.block} key={i}>
              <TaskImage src={img} width="100%" />
              <div className={styles.select}>
                <SelectField
                  options={options}
                  index={i}
                  onChange={handleChoice}
                  placeholder={completed ? answers[i] : 'Виберіть тип функції'}
                  minWidth="300px"
                />
              </div>
            </div>
          ))}
        </div>
      </TaskBody>
    </div>
  );
}

export default Task;
