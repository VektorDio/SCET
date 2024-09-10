import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../renderer/components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../renderer/components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskInfoBar';
import { CourseData } from '../../../../../../renderer/App';

function TaskInfo() {
  const taskId = 'task2';
  const { courseData } = useContext(CourseData);
  const task = courseData[taskId];

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.2 </ChapterTitle>
      <ChapterParagraph>
        Вхідні сигнали. Зміст ціеї задачі полягає у тому, щоб правильно
        встановити відповідність між типами вхідних сигналів та їх назвами.
        Придівіться до зображень вхідних сигналів та виберіть із випадаючого
        списку правильний пункт.
        <TaskInfoBar
          time={task.bestTime}
          tries={task.tries}
          selectedCourse="/tasks/2/task"
        />
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default TaskInfo;
