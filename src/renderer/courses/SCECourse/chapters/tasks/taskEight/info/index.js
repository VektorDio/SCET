import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import { CourseData } from '../../../../../../App';

function TaskInfo() {
  const taskId = 'task8';
  const { courseData } = useContext(CourseData)
  const task = courseData[taskId];

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.8 </ChapterTitle>
      <ChapterParagraph>
        Критерії стійкості. Визначник Гурвіца. В цій задачі буде представленно
        передавальну функцію системи. Потрібно заповнити клітинки матриці
        відповідними коєфіціентами характеристичного рівняння.
        <TaskInfoBar
          time={ task.bestTime }
          tries={ task.tries }
          selectedCourse="/tasks/8/task"
        />
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default TaskInfo;
