import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../hooks/useReadTaskFromJson';
import { Font } from '../../../../../../App';
const TaskInfo = () => {
  const taskId = "task6"
  const { task } = useReadTaskFromJson(taskId)
  const fontSize = useContext(Font)
  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.6 </ChapterTitle>
      <ChapterParagraph fontSize={fontSize}>
        Вхідні сигнали.
        В цій задачі буде представлено чотири пристрої: двигун, редуктор, пневматичний циліндр та демпферна пружина.
        Потрібно підібрати ланку, яка найкраще описую принцип роботи даних систем.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/tasks/6/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
