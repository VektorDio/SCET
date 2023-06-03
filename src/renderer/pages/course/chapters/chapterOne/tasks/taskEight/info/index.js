import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../../hooks/useReadTaskFromJson';
import { Font } from '../../../../../../../App';
const TaskInfo = () => {
  const taskId = "task8"
  const { task } = useReadTaskFromJson(taskId)
  const fontSize = useContext(Font)

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.8 </ChapterTitle>
      <ChapterParagraph fontSize={fontSize}>
        Критерії стійкості. Визначник Гурвіца.
        В цій задачі буде представленно передавальну функцію системи.
        Потрібно заповнити клітинки матриці відповідними коєфіціентами характеристичного рівняння.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskEight/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
