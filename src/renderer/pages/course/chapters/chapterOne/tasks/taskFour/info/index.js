import React, { useEffect, useState } from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';

const TaskInfo = () => {
  const [task, setTask] = useState()

  useEffect(() => {
    if (task === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => setTask(result.task4))
    }
  })

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.4 </ChapterTitle>
      <ChapterParagraph>
        Принципи управління САУ.
        В даній задачі потрібно відтворити систему управління за збуренням.
        Така система складаеться з регулятора, об'єкту регулювання та компенсаційного каналу,
        який вимірює збурення та передає його сигнал на регулятор.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskFour/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
