import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './courseMenuColumn.module.css';
import ChapterName from './chapterName';
import ArrowLeftBtn from '../../../buttons/arrowLeftBtn';
import GearBtn from '../../../buttons/gearBtn';
import { AppSettings, CourseData } from '../../../../App';
import { taskRefs } from '../../../../courses/SCECourse';

function CourseBody() {
  const navigate = useNavigate();
  const { settings, handleSettingsChange } = useContext(AppSettings);
  const { courseData } = useContext(CourseData);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = settings.courseScroll;
    }
  }, [ref.current]);

  function handleReturn() {
    navigate('/menu');
  }

  function handleGoSettings() {
    navigate('/pages/courseSettings');
  }

  function handleGoCourse() {
    navigate('/pages/course');
  }
  function saveScrollPosition() {
    handleSettingsChange({ courseScroll: ref.current.scrollTop });
  }

  return (
    <div className={styles.container}>
      <div className={styles.column} ref={ref} onScroll={saveScrollPosition}>
        <div className={styles.columnName} onClick={handleGoCourse}>
          Змiст
        </div>

        <ChapterName navIndex="/chapters/1" isChapter>
          Тема 1
        </ChapterName>
        <ChapterName navIndex="/chapters/1/1">
          Тема 1.1 - Історія САУ
        </ChapterName>
        <ChapterName navIndex="/chapters/1/2">
          Тема 1.2 - Основні терміни та позначення. Класифікація САУ
        </ChapterName>
        <ChapterName navIndex="/chapters/1/3">
          Тема 1.3 - Принципи регулювання САУ
        </ChapterName>

        <ChapterName navIndex="/chapters/2" isChapter>
          Тема 2
        </ChapterName>
        <ChapterName navIndex="/chapters/2/1">
          Тема 2.1 - Представлення САУ динамічними ланцюжками.
        </ChapterName>
        <ChapterName navIndex="/chapters/2/2">
          Тема 2.2 - Лінеаризація. Типові вхідні сигнали.
        </ChapterName>
        <ChapterName navIndex="/chapters/2/3">
          Тема 2.3 - Перетворення Лапласа. Передавальна функція.
        </ChapterName>

        <ChapterName navIndex="/chapters/3" isChapter>
          Тема 3
        </ChapterName>
        <ChapterName navIndex="/chapters/3/1">
          Тема 3.1 - Перехідна характеристика. Імпульсна характеристика.
        </ChapterName>
        <ChapterName navIndex="/chapters/3/2">
          Тема 3.2 - КПФ. АФЧХ і ЛФЧХ.
        </ChapterName>
        <ChapterName navIndex="/chapters/3/3">
          Тема 3.3 - Аналіз графіків характеристик.
        </ChapterName>

        <ChapterName navIndex="/chapters/4" isChapter>
          Тема 4
        </ChapterName>
        <ChapterName navIndex="/chapters/4/1">
          Тема 4.1 - Класифікація ланцюжків. Ланцюжки першого і другого
          порядків.
        </ChapterName>
        <ChapterName navIndex="/chapters/4/2">
          Тема 4.2 - Визначення стійкості.
        </ChapterName>
        <ChapterName navIndex="/chapters/4/3">
          Тема 4.3 - Алгебраїчні, фазові та частотні критерії стійкості. Запас
          стійкості.
        </ChapterName>
        {taskRefs.map((e, i) => (
          <ChapterName navIndex={`/tasks/${i + 1}/info`} isChapter>
            Задача 1.{i + 1} - {e[2]}
          </ChapterName>
        ))}
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.bottomBlock}>
          <div className={styles.bottomButtons}>
            <div className={styles.button}>
              <ArrowLeftBtn onClick={handleReturn} />
            </div>
            <div className={styles.button}>
              <GearBtn onClick={handleGoSettings} />
            </div>
          </div>
        </div>

        <div className={styles.completionText}>{`${courseData.courseCompletion}%`}</div>
      </div>
    </div>
  );
}

export default CourseBody;
