import React, { useEffect, useState } from 'react';
import TaskMenuColumn from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskMenuColumn';
import TaskBody from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskBody';
import styles from './fifthTask.module.css';
import ChapterParagraph from '../../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import ideal from '../../../../../../../assets/diagrams/ideal.png';
import firstOrder from '../../../../../../../assets/diagrams/firstOrder.png';
import firstOrderIsodrom from '../../../../../../../assets/diagrams/firstOrderIsodrom.png';
import idealDiff from '../../../../../../../assets/diagrams/idealDiff.png';
import realDiff from '../../../../../../../assets/diagrams/realDiff.png';
import idealIntegral from '../../../../../../../assets/diagrams/idealIntegral.png';
import realIntegral from '../../../../../../../assets/diagrams/realIntegral.png';
import ClickBlock from '../../../../../../renderer/components/taskPageElements/clickBlock';
import TaskImage from '../../../../../../renderer/components/taskPageElements/taskImage';
import useTask from '../../../../../../hooks/useTask';

function Task() {
  const taskId = 'task5';
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const answers = [true, true, true, false, false, false, false];
  const isTaskSolved = selected.every((e, i) => e === answers[i]);

  const { time, completed, mistake, handleAttempt } = useTask({ taskId });

  useEffect(() => {
    if (completed) {
      setSelected([...answers]);
    }
  }, [completed]);

  function handleCheck() {
    handleAttempt(isTaskSolved);
  }

  const images = [
    ideal,
    firstOrder,
    firstOrderIsodrom,
    idealDiff,
    realDiff,
    idealIntegral,
    realIntegral,
  ];

  const labels = [
    'Ідеальна ланка',
    'Ланка першого порядку',
    'Ізодроина ланка першого порядку',
    'Ідеальна діференціююча ланка',
    'Реально діференціююча ланка',
    'Ідеально інтегруюча ланка',
    'Реальна інтегруюча ланка',
  ];

  function onSelectedChange(index) {
    setSelected((prev) => {
      const buf = [...prev];
      buf[index] = !prev[index];
      return buf;
    });
  }

  return (
    <div className={styles.container}>
      <TaskMenuColumn time={time} completed={completed} taskNumber="1.5">
        В цому завданні потрібно намалювати стрілки між потрібними блоками,
        використовуючи маркери.
      </TaskMenuColumn>
      <TaskBody
        handleCheck={handleCheck}
        completed={completed}
        mistake={mistake}
        task="/tasks/5/info"
      >
        <ChapterParagraph>
          Якими типовими ланками можна описати наступну систему? <br />
          <b>Єлектродвигун</b>, який ввімкнений в мережу, обертає свій вал, який
          в свою чергу обертає <b>механічний редуктор</b>. Швидкість обертання
          двигуна регулюєтья системою автоматично, спираючись на сигнал{' '}
          <b>тахометра</b>.
        </ChapterParagraph>
        <div className={styles.imagesContainer}>
          {images.map((img, i) => (
            <ClickBlock
              selected={selected[i]}
              setSelected={() => onSelectedChange(i)}
              label={labels[i]}
              key={i}
            >
              <TaskImage src={img} />
            </ClickBlock>
          ))}
        </div>
      </TaskBody>
    </div>
  );
}
export default Task;
