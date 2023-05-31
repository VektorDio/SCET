import React from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../../hooks/useReadTaskFromJson';

const TaskInfo = () => {
  const taskId = "task6"
  const task = useReadTaskFromJson(taskId)

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.6 </ChapterTitle>
      <ChapterParagraph>
        Вхідні сигнали.
        В цій задачі буде представлено чотири пристрої: двигун, редуктор, пневматичний циліндр та демпферна пружина.
        Потрібно підібрати ланку, яка найкраще описую принцип роботи даних систем.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskSix/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
