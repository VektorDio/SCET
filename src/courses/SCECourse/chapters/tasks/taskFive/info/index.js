import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../renderer/components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../renderer/components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../renderer/components/taskPageElements/taskPageWrapper/taskInfoBar';
import { CourseData } from '../../../../../../renderer/App';

function TaskInfo() {
  const taskId = 'task5';
  const { courseData } = useContext(CourseData);
  const task = courseData[taskId];

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.5 </ChapterTitle>
      <ChapterParagraph>
        Типові динамічні ланки. В цій задачі вам буде представлено текстовий
        опис системи та їх елементів. Потрібно визначити, якими типовими
        динамічніми ланками можно спрощено описати цю систему.
        <TaskInfoBar
          time={task.bestTime}
          tries={task.tries}
          selectedCourse="/tasks/5/task"
        />
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default TaskInfo;
