import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import { CourseData } from '../../../../../../App';

function TaskInfo() {
  const taskId = 'task6';
  const { courseData } = useContext(CourseData)
  const task = courseData[taskId];

  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.6 </ChapterTitle>
      <ChapterParagraph>
        Вхідні сигнали. В цій задачі буде представлено чотири пристрої: двигун,
        редуктор, пневматичний циліндр та демпферна пружина. Потрібно підібрати
        ланку, яка найкраще описую принцип роботи даних систем.
        <TaskInfoBar
          time={ task.bestTime }
          tries={ task.tries }
          selectedCourse="/tasks/6/task"
        />
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default TaskInfo;
