import React from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../hooks/useReadTaskFromJson';
const TaskInfo = () => {
  const taskId = "task1"
  const { task } = useReadTaskFromJson(taskId)
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
          selectedCourse={"/tasks/1/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
