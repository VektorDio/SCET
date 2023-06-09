import React, { useContext } from 'react';
import styles from "./courseMenuColumn.module.css"
import { useNavigate } from 'react-router-dom';
import ChapterName from './chapterName';
import ArrowLeftBtn from '../../../buttons/arrowLeftBtn';
import GearBtn from '../../../buttons/gearBtn';
import { Completion } from '../../../../App';
import {taskRefs} from '../../../../pages/course';

const CourseBody = () => {
  const navigate = useNavigate();
  const completion = useContext(Completion)
  function handleReturn(){
    navigate("/")
  }
  function handleGoSettings(){
    navigate("/pages/courseSettings")
  }

  function handleGoCourse(){
    navigate("/pages/course")
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.columnName} onClick={handleGoCourse}>
          Змiст
        </div>

        <ChapterName navIndex={"/chapters/1"} isChapter={true}>
          Тема 1
        </ChapterName>
        <ChapterName navIndex={"/chapters/1/1"} >
          Тема 1.1
        </ChapterName >
        <ChapterName navIndex={"/chapters/1/2"} >
          Тема 1.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/1/3"} >
          Тема 1.3
        </ChapterName>

        {
          taskRefs.map((e, i) => (
            <ChapterName navIndex={`/tasks/${i+1}/info`} >
              Задача 1.{i+1}
            </ChapterName>
          ))
        }

        <ChapterName navIndex={"/chapters/2"} isChapter={true}>
          Тема 2
        </ChapterName>
        <ChapterName navIndex={"/chapters/2/1"} >
          Тема 2.1
        </ChapterName>
        <ChapterName navIndex={"/chapters/2/2"} >
          Тема 2.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/2/3"} >
          Тема 2.3
        </ChapterName>

        <ChapterName navIndex={"/chapters/3"} isChapter={true}>
          Тема 3
        </ChapterName>
        <ChapterName navIndex={"/chapters/3/1"}>
          Тема 3.1
        </ChapterName>
        <ChapterName navIndex={"/chapters/3/2"} >
          Тема 3.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/3/3"} >
          Тема 3.3
        </ChapterName>

        <ChapterName navIndex={"/chapters/4"} isChapter={true}>
          Тема 4
        </ChapterName>
        <ChapterName navIndex={"/chapters/4/1"}>
          Тема 4.1
        </ChapterName>
        <ChapterName navIndex={"/chapters/4/2"}>
          Тема 4.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/4/3"}>
          Тема 4.3
        </ChapterName>
        <ChapterName navIndex={"/chapters/4/chapterOne"}>
          Задача 4.1
        </ChapterName>

        <ChapterName navIndex={"/chapters/5"} isChapter={true}>
          Тема 5
        </ChapterName>
        <ChapterName navIndex={"/chapters/5/1"}>
          Тема 5.1
        </ChapterName>
        <ChapterName navIndex={"/chapters/5/2"}>
          Тема 5.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/5/3"}>
          Тема 5.3
        </ChapterName>
        <ChapterName navIndex={"/chapters/5/chapterOne"}>
          Задача 5.1
        </ChapterName>

        <ChapterName navIndex={"/chapters/6"} isChapter={true}>
          Тема 6
        </ChapterName>
        <ChapterName navIndex={"/chapters/6/1"}>
          Тема 6.1
        </ChapterName>
        <ChapterName navIndex={"/chapters/6/2"}>
          Тема 6.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/6/3"}>
          Тема 6.3
        </ChapterName>
        <ChapterName>
          Задача 6.1
        </ChapterName>

        <ChapterName navIndex={"/chapters/7"} isChapter={true}>
          Тема 7
        </ChapterName>
        <ChapterName navIndex={"/chapters/7/1"}>
          Тема 7.1
        </ChapterName>
        <ChapterName navIndex={"/chapters/7/2"}>
          Тема 7.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/7/3"}>
          Тема 7.3
        </ChapterName>
        <ChapterName navIndex={"/chapters/7/chapterOne"}>
          Задача 7.1
        </ChapterName>

        <ChapterName navIndex={"/chapters/8"} isChapter={true}>
          Тема 8
        </ChapterName>
        <ChapterName navIndex={"/chapters/8/1"}>
          Тема 8.1
        </ChapterName>
        <ChapterName navIndex={"/chapters/8/2"}>
          Тема 8.2
        </ChapterName>
        <ChapterName navIndex={"/chapters/8/3"}>
          Тема 8.3
        </ChapterName>
        <ChapterName navIndex={"/chapters/8/chapterOne"}>
          Задача 8.1
        </ChapterName>
      </div>

      <div className={styles.bottomBlock}>

        <div className={styles.bottomBlock}>
          <div className={styles.bottomButtons}>
            <div className={styles.button}>
              <ArrowLeftBtn onClick={handleReturn}/>
            </div>
            <div className={styles.button}>
              <GearBtn onClick={handleGoSettings}/>
            </div>
          </div>
        </div>

        <div className={styles.completionText}>{completion+ "%"}</div>
      </div>
    </div>
  );
};

export default CourseBody;
