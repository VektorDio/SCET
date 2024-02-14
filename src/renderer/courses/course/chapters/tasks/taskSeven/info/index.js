import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import { CourseData } from '../../../../../../App';

function TaskInfo() {
  const taskId = 'task7';
  const { courseData } = useContext(CourseData)
  const task = courseData[taskId];

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.7 </ChapterTitle>
      <ChapterParagraph>
        Логарифмічни характеристики системи. В цій задачі буде представлено
        ситему, описану перехідною функцією. Вам потрібно визначити відповідні
        нахили, зоб побудувати ЛАФЧХ.
        <TaskInfoBar
          time={ task.bestTime }
          tries={ task.tries }
          selectedCourse="/tasks/7/task"
        />
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default TaskInfo;
