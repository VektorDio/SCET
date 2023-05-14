import React, { useEffect, useState } from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';

const TaskInfo = () => {
  const [task, setTask] = useState()

  useEffect(() => {
    if (task === undefined){
      window.electron.ipcRenderer.invoke('readJson').then((result) => setTask(result.task1))
    }
  })
  console.log(task)

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.1 </ChapterTitle>
      <ChapterParagraph>
        Загальна схема САУ.
        Зміст ціеї задачі полягає у тому, щоб правильно встановити відповідність
        між елементами схеми та їх назвами. Виберіть із випадаючого списку правильний пункт.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskOne/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
