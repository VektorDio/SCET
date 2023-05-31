import React from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../../hooks/useReadTaskFromJson';

const TaskInfo = () => {
  const taskId = "task2"
  const task = useReadTaskFromJson(taskId)

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.2 </ChapterTitle>
      <ChapterParagraph>
        Вхідні сигнали.
        Зміст ціеї задачі полягає у тому, щоб правильно встановити відповідність
        між типами вхідних сигналів та їх назвами. Придівіться до зображень вхідних сигналів та виберіть із випадаючого списку правильний пункт.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskTwo/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
