import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskInfoBar from '../../../../../../../components/taskPageElements/taskPageWrapper/taskInfoBar';
import useReadTaskFromJson from '../../../../../../../../hooks/useReadTaskFromJson';
import { Font } from '../../../../../../../App';
const TaskInfo = () => {
  const taskId = "task4"
  const { task } = useReadTaskFromJson(taskId)
  const fontSize = useContext(Font)
  return (
    <CoursePageWrapper>
      <ChapterTitle> Задача 1.4 </ChapterTitle>
      <ChapterParagraph fontSize={fontSize}>
        Принципи управління САУ.
        В даній задачі потрібно відтворити систему управління за збуренням.
        Така система складаеться з регулятора, об'єкту регулювання та компенсаційного каналу,
        який вимірює збурення та передає його сигнал на регулятор.
        <TaskInfoBar
          time={(task === undefined) ? (0) : (task.bestTime)}
          tries={(task === undefined) ? (0) : (task.tries)}
          selectedCourse={"/chapterOne/tasks/taskFour/task"}/>
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default TaskInfo;
