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

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.columnName}> Змiст </div>

        <ChapterName navIndex={"/chapters/chapterOne"}>
          Тема 1
        </ChapterName>
        <ChapterName navIndex={"/chapterOne/subchapterOne"} isChapter={false}>
          Тема 1.1
        </ChapterName >
        <ChapterName navIndex={"/chapterOne/subchapterTwo"} isChapter={false}>
          Тема 1.2
        </ChapterName>
        <ChapterName navIndex={"/chapterOne/subchapterThree"} isChapter={false}>
          Тема 1.3
        </ChapterName>

        {
          taskRefs.map((e, i) => (
            <ChapterName navIndex={`/chapterOne/tasks/${i+1}/info`} isChapter={false}>
              Задача 1.{i+1}
            </ChapterName>
          ))
        }

        <ChapterName navIndex={"/pages/course/chapters/2"}>
          Тема 2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/2/chapterOne"} isChapter={false}>
          Тема 2.1
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/2/2"} isChapter={false}>
          Тема 2.2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/2/3"} isChapter={false}>
          Тема 2.3
        </ChapterName>

        <ChapterName navIndex={"/pages/course/chapters/3"}>
          Тема 3
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/3/chapterOne"}>
          Тема 3.1
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/3/2"} isChapter={false}>
          Тема 3.2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/3/3"} isChapter={false}>
          Тема 3.3
        </ChapterName>

        <ChapterName navIndex={"/pages/course/chapters/4"}>
          Тема 4
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Тема 4.1
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Тема 4.2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Тема 4.3
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Задача 4.1
        </ChapterName>

        <ChapterName navIndex={"/pages/course/chapters/5"}>
          Тема 5
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Тема 5.1
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Тема 5.2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Тема 5.3
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Задача 5.1
        </ChapterName>

        <ChapterName navIndex={"/pages/course/chapters/6"}>
          Тема 6
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/6/chapterOne"}>
          Тема 6.1
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/6/2"}>
          Тема 6.2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/6/3"}>
          Тема 6.3
        </ChapterName>
        <ChapterName>
          Задача 6.1
        </ChapterName>

        <ChapterName navIndex={"/pages/course/chapters/7"}>
          Тема 7
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Тема 7.1
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Тема 7.2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Тема 7.3
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Задача 7.1
        </ChapterName>

        <ChapterName navIndex={"/pages/course/chapters/8"}>
          Тема 8
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
          Тема 8.1
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
          Тема 8.2
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
          Тема 8.3
        </ChapterName>
        <ChapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
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
