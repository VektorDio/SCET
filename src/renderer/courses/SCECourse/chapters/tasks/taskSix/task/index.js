import React, { useMemo, useState } from 'react';
import TaskMenuColumn from '../../../../../../components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../components/taskPageElements/taskPageWrapper/taskBody';
import styles from './sixthTask.module.css';
import TaskImage from '../../../../../../components/taskPageElements/taskImage';
import SelectField from '../../../../../../components/taskPageElements/selectField';
import engine from '../../../../../../../../assets/diagrams/engine.jpg';
import springAbsorber from '../../../../../../../../assets/diagrams/springAbsorber.jpg';
import reductionGear from '../../../../../../../../assets/diagrams/reductionGear.jpg';
import hydraulicTube from '../../../../../../../../assets/diagrams/hydraulicTube.png';
import useTask from '../../../../../../../hooks/useTask';

function Task() {
  const taskId = 'task6';
  const [selectedOptions, setSelectedOptions] = useState([]);
  const answers = [
    'Ідеальна інтегруюча ланка',
    'Аперіодична ланка першого порядку',
    'Ізодромна ланка першого порядку',
    'Ідеальна (безінерційна, підсилювальна) ланка',
  ];
  const images = [hydraulicTube, engine, springAbsorber, reductionGear];

  const isTaskSolved =
    selectedOptions.every((e, i) => e === answers[i]) &&
    selectedOptions.length === answers.length;

  const { time, completed, mistake, handleAttempt } =
    useTask({ taskId });

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
      <TaskMenuColumn time={time} completed={completed} taskNumber="1.6">
        В цому завданні необхідно обрати потрібну відповідь із випадаючого
        списку.
      </TaskMenuColumn>
      <TaskBody
        handleCheck={handleCheck}
        completed={completed}
        mistake={mistake}
        task="/tasks/6/info"
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
                  placeholder={completed ? answers[i] : 'Виберіть сигнал'}
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
