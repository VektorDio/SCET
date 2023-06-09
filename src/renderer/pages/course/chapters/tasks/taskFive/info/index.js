import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../hooks/useReadTaskFromJson';
import { Font } from '../../../../../../App';
const TaskInfo = () => {
  const taskId = "task5"
  const { task } = useReadTaskFromJson(taskId)
  const fontSize = useContext(Font)
  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.5 </ChapterTitle>
      <ChapterParagraph fontSize={fontSize}>
        Типові динамічні ланки.
        В цій задачі вам буде представлено текстовий опис системи та їх елементів.
        Потрібно визначити, якими типовими динамічніми ланками можно спрощено описати цю систему.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/tasks/5/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
