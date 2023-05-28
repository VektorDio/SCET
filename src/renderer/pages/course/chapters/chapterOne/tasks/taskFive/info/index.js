import React, { useEffect, useState } from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';

const TaskInfo = () => {
  const [task, setTask] = useState()

  useEffect(() => {
    if (task === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => setTask(result.task5))
    }
  })

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.5 </ChapterTitle>
      <ChapterParagraph>
        Типові динамічні ланки.
        В цій задачі вам буде представлено текстовий опис системи та їх елементів.
        Потрібно визначити, якими типовими динамічніми ланками можно спрощено описати цю систему.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskFive/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
