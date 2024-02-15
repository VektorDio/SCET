import React, { useContext } from 'react';
import CoursePageWrapper from '../../renderer/components/coursePageElements/coursePageWrapper';
import ChapterParagraph from '../../renderer/components/coursePageElements/courseText/chapterParagraph';
import ChapterTitle from '../../renderer/components/coursePageElements/courseText/chapterTitle';

import TaskInfo1_1 from './chapters/tasks/taskOne/info';
import Task1_1 from './chapters/tasks/taskOne/task';
import TaskInfo1_2 from './chapters/tasks/taskTwo/info';
import Task1_2 from './chapters/tasks/taskTwo/task';
import TaskInfo1_3 from './chapters/tasks/taskThree/info';
import Task1_3 from './chapters/tasks/taskThree/task';
import TaskInfo1_4 from './chapters/tasks/taskFour/info';
import Task1_4 from './chapters/tasks/taskFour/task';
import TaskInfo1_5 from './chapters/tasks/taskFive/info';
import Task1_5 from './chapters/tasks/taskFive/task';
import TaskInfo1_6 from './chapters/tasks/taskSix/info';
import Task1_6 from './chapters/tasks/taskSix/task';
import TaskInfo1_7 from './chapters/tasks/taskSeven/info';
import Task1_7 from './chapters/tasks/taskSeven/task';
import TaskInfo1_8 from './chapters/tasks/taskEight/info';
import Task1_8 from './chapters/tasks/taskEight/task';

import Chapter1 from './chapters/chapterOne';
import Chapter2 from './chapters/chapterTwo';
import Chapter3 from './chapters/chapterThree';
import Chapter4 from './chapters/chapterFour';

import Chapter1_1 from './chapters/chapterOne/1';
import Chapter1_2 from './chapters/chapterOne/2';
import Chapter1_3 from './chapters/chapterOne/3';

import Chapter2_1 from './chapters/chapterTwo/1';
import Chapter2_2 from './chapters/chapterTwo/2';
import Chapter2_3 from './chapters/chapterTwo/3';

import Chapter3_2 from './chapters/chapterThree/2';
import Chapter3_1 from './chapters/chapterThree/1';
import Chapter3_3 from './chapters/chapterThree/3';

import Chapter4_1 from './chapters/chapterFour/1';
import Chapter4_2 from './chapters/chapterFour/2';
import Chapter4_3 from './chapters/chapterFour/3';
import { AppSettings } from '../../renderer/App';
import useKeepResolution from '../../hooks/useKeepResolution';

export const taskRefs = [
  [<TaskInfo1_1 />, <Task1_1 />, 'Загальна схема САУ.'],
  [<TaskInfo1_2 />, <Task1_2 />, 'Вхідні сигнали.'],
  [<TaskInfo1_3 />, <Task1_3 />, 'Система стабілізації САУ.'],
  [<TaskInfo1_4 />, <Task1_4 />, 'Принципи управління САУ.'],
  [<TaskInfo1_5 />, <Task1_5 />, 'Типові динамічні ланки.'],
  [<TaskInfo1_6 />, <Task1_6 />, 'Вхідні сигнали.'],
  [<TaskInfo1_7 />, <Task1_7 />, 'Логарифмічни характеристики системи.'],
  [<TaskInfo1_8 />, <Task1_8 />, 'Критерії стійкості. Визначник Гурвіца.'],
];

export const chapterRefs = [
  [<Chapter1 />, [<Chapter1_1 />, <Chapter1_2 />, <Chapter1_3 />]],
  [<Chapter2 />, [<Chapter2_1 />, <Chapter2_2 />, <Chapter2_3 />]],
  [<Chapter3 />, [<Chapter3_1 />, <Chapter3_2 />, <Chapter3_3 />]],
  [<Chapter4 />, [<Chapter4_1 />, <Chapter4_2 />, <Chapter4_3 />]],
];

function SCECourse() {
  const { settings } = useContext(AppSettings);
  useKeepResolution(settings.courseResolution)

  return (
    <CoursePageWrapper>
      <ChapterTitle>Інформація про курс</ChapterTitle>
      <ChapterParagraph>
        Курс Основ Теорії Автоматизації Управління 1.0
        <br />
        Курс складається з чотирьох тем, в кожній по три підтеми, та восьми
        задач. <br />В курсі буде розглянуто основи теорії автоматичного
        управління та аналіз динамічних систем. Окрім цього, буде розглянуто
        побуддову моделей систем та аналіз їх характеристик. Курс скорочений і
        створений в ознайомчих цілях, ознайомитись з повним курсом можна у
        додатках. Для проходження курсу потрібно пройти усі задачі. <br />
      </ChapterParagraph>
      <ChapterParagraph>
        Теми курсу: <br />
        Вступ до САУ <br />
        1) Поняття САУ. Графічне представлення САУ. Типи САУ. Принципи
        регулювання САУ. <br />- Історія САУ. <br />- Основні терміни та
        позначення. Класифікація САУ. <br />- Принципи регулювання САУ. <br />
        2) Опис САУ дифф.рівняннями. Лінеаризація. Перетворення Лапласа і
        передавальна функція. <br />- Представлення САУ динамічними ланцюжками.{' '}
        <br />- Лінеаризація. Типові вхідні сигнали. <br />- Перетворення
        Лапласа. Передавальна функція. <br />
        3) Часові, частотні та логарифмічні характеристики передавальної
        функції. <br />- Перехідна характеристика. Імпульсна характеристика.
        КПФ.
        <br />- АФЧХ і ЛФЧХ. <br />- Аналіз графіків характеристик. <br />
        4) Типові динамічні ланцюжки. Стійкість САУ. Критерії стійкості. <br />-
        Класифікація ланцюжків. Ланцюжки першого і другого порядків. <br />-
        Визначення стійкості. <br />- Алгебраїчні, фазові та частотні критерії
        стійкості. Запас стійкості. <br />
      </ChapterParagraph>
      <ChapterParagraph>
        За основу курсу було взято: <br />
        КОНСПЕКТ лекцій з дисципліни «Теорія автоматичного керування»
        <br />
        Автор: Н.Б. Репнікова
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default SCECourse;
