import React from 'react';
import styles from "./courseMenuColumn.module.css"
import { useNavigate } from 'react-router-dom';
import ChapterName from './chapterName';
import SubchapterName from './subchapterName';
import ArrowLeftBtn from '../../../buttons/arrowLeftBtn';
import GearBtn from '../../../buttons/gearBtn';
const CourseBody = () => {
  const navigate = useNavigate();
  function handleReturn(){
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.columnName}> Змiст </div>

        <ChapterName navIndex={"/chapters/chapterOne"}>
          Тема 1
        </ChapterName>
        <SubchapterName navIndex={"/chapterOne/subchapterOne"}>
          Тема 1.1
        </SubchapterName >
        <SubchapterName navIndex={"/chapterOne/subchapterTwo"}>
          Тема 1.2
        </SubchapterName>
        <SubchapterName navIndex={"/chapterOne/subchapterThree"}>
          Тема 1.3
        </SubchapterName>
        <SubchapterName navIndex={"/chapterOne/tasks/taskOne/info"}>
          Задача 1.1
        </SubchapterName>
        <SubchapterName navIndex={"/chapterOne/tasks/taskTwo/info"}>
          Задача 1.2
        </SubchapterName>
        <SubchapterName navIndex={"/chapterOne/tasks/taskThree/info"}>
          Задача 1.3
        </SubchapterName>

        <ChapterName navIndex={"/pages/course/chapters/2"}>
          Тема 2
        </ChapterName>
        <SubchapterName navIndex={"/pages/course/chapters/2/chapterOne"}>
          Тема 2.1
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/2/2"}>
          Тема 2.2
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/2/3"}>
          Тема 2.3
        </SubchapterName>
        <SubchapterName>
          Задача 2.1
        </SubchapterName>

        <ChapterName navIndex={"/pages/course/chapters/3"}>
          Тема 3
        </ChapterName>
        <SubchapterName navIndex={"/pages/course/chapters/3/chapterOne"}>
          Тема 3.1
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/3/2"}>
          Тема 3.2
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/3/3"}>
          Тема 3.3
        </SubchapterName>
        <SubchapterName >
          Задача 3.1
        </SubchapterName>

        <ChapterName navIndex={"/pages/course/chapters/4"}>
          Тема 4
        </ChapterName>
        <SubchapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Тема 4.1
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Тема 4.2
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Тема 4.3
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/4/chapterOne"}>
          Задача 4.1
        </SubchapterName>

        <ChapterName navIndex={"/pages/course/chapters/5"}>
          Тема 5
        </ChapterName>
        <SubchapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Тема 5.1
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Тема 5.2
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Тема 5.3
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/5/chapterOne"}>
          Задача 5.1
        </SubchapterName>

        <ChapterName navIndex={"/pages/course/chapters/6"}>
          Тема 6
        </ChapterName>
        <SubchapterName navIndex={"/pages/course/chapters/6/chapterOne"}>
          Тема 6.1
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/6/2"}>
          Тема 6.2
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/6/3"}>
          Тема 6.3
        </SubchapterName>
        <SubchapterName>
          Задача 6.1
        </SubchapterName>

        <ChapterName navIndex={"/pages/course/chapters/7"}>
          Тема 7
        </ChapterName>
        <SubchapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Тема 7.1
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Тема 7.2
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Тема 7.3
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/7/chapterOne"}>
          Задача 7.1
        </SubchapterName>

        <ChapterName navIndex={"/pages/course/chapters/8"}>
          Тема 8
        </ChapterName>
        <SubchapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
          Тема 8.1
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
          Тема 8.2
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
          Тема 8.3
        </SubchapterName>
        <SubchapterName navIndex={"/pages/course/chapters/8/chapterOne"}>
          Задача 8.1
        </SubchapterName>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.bottomBlock}>
          <div className={styles.bottomButtons}>
            <div className={styles.button}>
              <ArrowLeftBtn onClick={handleReturn}/>
            </div>
            <div className={styles.button}>
              <GearBtn/>
            </div>
          </div>
          <div className={styles.completionText}>

          </div>
        </div>
        <div className={styles.completionText}>100%</div>
      </div>
    </div>
  );
};

export default CourseBody;
