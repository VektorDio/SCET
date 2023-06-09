import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../hooks/useReadTaskFromJson';
import { Font } from '../../../../../../App';
const TaskInfo = () => {
  const taskId = "task7"
  const { task } = useReadTaskFromJson(taskId)
  const fontSize = useContext(Font)

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.7 </ChapterTitle>
      <ChapterParagraph fontSize={fontSize}>
        Логарифмічни характеристики системи.
        В цій задачі буде представлено ситему, описану перехідною функцією.
        Вам потрібно визначити відповідні нахили, зоб побудувати ЛАФЧХ.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/tasks/7/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
