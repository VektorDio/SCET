import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../../hooks/useReadTaskFromJson';
import { Font } from '../../../../../../../App';
const TaskInfo = () => {
  const taskId = "task3"
  const { task } = useReadTaskFromJson(taskId)
  const fontSize = useContext(Font)
  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.3 </ChapterTitle>
      <ChapterParagraph fontSize={fontSize}>
        Система стабілізації САУ.
        В даній задачі потрібно відтворити систему стабілізації швидкості двигуна.
        Така система складаеться з датчика, підсилювача, електродвигуна, диску та контроллера.
        Датчик вимірює швидкість обертання диску електродвигуна та передає свій сигнал на контроллер, який використовуючи зовортній зв'язок,
        створює керуючий вплив, який подається на двигун через підсилювач.
        Зміст ціеї задачі полягає у тому, щоб правильно встановити відповідність
        між елементами системи та їх положенням у схемі.
        ПУ - пристрій управління.
        ВП - виконавчий пристрій.
        ОУ - об'єкт управління.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskThree/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
