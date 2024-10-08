import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../renderer/components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../renderer/components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskInfoBar';
import { CourseData } from '../../../../../../renderer/App';

function TaskInfo() {
  const taskId = 'task3';
  const { courseData } = useContext(CourseData);
  const task = courseData[taskId];

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.3 </ChapterTitle>
      <ChapterParagraph>
        Система стабілізації САУ. В даній задачі потрібно відтворити систему
        стабілізації швидкості двигуна. Така система складаеться з датчика,
        підсилювача, електродвигуна, диску та контроллера. Датчик вимірює
        швидкість обертання диску електродвигуна та передає свій сигнал на
        контроллер, який використовуючи зовортній зв&apos;язок, створює керуючий
        вплив, який подається на двигун через підсилювач. Зміст ціеї задачі
        полягає у тому, щоб правильно встановити відповідність між елементами
        системи та їх положенням у схемі. ПУ - пристрій управління. ВП -
        виконавчий пристрій. ОУ - об&apos;єкт управління.
        <TaskInfoBar
          time={task.bestTime}
          tries={task.tries}
          selectedCourse="/tasks/3/task"
        />
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default TaskInfo;
