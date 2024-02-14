import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import { CourseData } from '../../../../../../App';

function TaskInfo() {
  const taskId = 'task1';
  const { courseData } = useContext(CourseData)
  const task = courseData[taskId];

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.1 </ChapterTitle>
      <ChapterParagraph>
        Загальна схема САУ. Зміст ціеї задачі полягає у тому, щоб правильно
        встановити відповідність між елементами схеми та їх назвами. Виберіть із
        випадаючого списку правильний пункт.
        <TaskInfoBar
          time={ task.bestTime }
          tries={ task.tries }
          selectedCourse="/tasks/1/task"
        />
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default TaskInfo;
