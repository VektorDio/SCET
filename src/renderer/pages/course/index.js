import React from 'react';
import CoursePageWrapper from '../../components/coursePageElements/coursePageWrapper';
import ChapterParagraph from '../../components/coursePageElements/courseText/chapterParagraph';
import ChapterTitle from '../../components/coursePageElements/courseText/chapterTitle';

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

import Chapter1 from './chapters/chapterOne'
import Chapter2 from './chapters/chapterTwo'
import Chapter3 from './chapters/chapterThree'
import Chapter4 from './chapters/chapterFour'
import Chapter5 from './chapters/chapterFive'
import Chapter6 from './chapters/chapterSix'
import Chapter7 from './chapters/chapterSeven'
import Chapter8 from './chapters/chapterEight'

import Chapter1_1 from './chapters/chapterOne/1'
import Chapter1_2 from './chapters/chapterOne/2'
import Chapter1_3 from './chapters/chapterOne/3'

import Chapter2_1 from './chapters/chapterTwo/1'
import Chapter2_2 from './chapters/chapterTwo/2'
import Chapter2_3 from './chapters/chapterTwo/3'

import Chapter3_2 from './chapters/chapterThree/2'
import Chapter3_1 from './chapters/chapterThree/1'
import Chapter3_3 from './chapters/chapterThree/3'

import Chapter4_1 from './chapters/chapterFour/1'
import Chapter4_2 from './chapters/chapterFour/2'
import Chapter4_3 from './chapters/chapterFour/3'

import Chapter5_1 from './chapters/chapterFive/1'
import Chapter5_2 from './chapters/chapterFive/2'
import Chapter5_3 from './chapters/chapterFive/3'

import Chapter6_1 from './chapters/chapterSix/1'
import Chapter6_2 from './chapters/chapterSix/2'
import Chapter6_3 from './chapters/chapterSix/3'

import Chapter7_1 from './chapters/chapterSeven/1'
import Chapter7_2 from './chapters/chapterSeven/2'
import Chapter7_3 from './chapters/chapterSeven/3'

import Chapter8_1 from './chapters/chapterEight/1'
import Chapter8_2 from './chapters/chapterEight/2'
import Chapter8_3 from './chapters/chapterEight/3'

export const taskRefs = [
  [<TaskInfo1_1/>, <Task1_1/>],
  [<TaskInfo1_2/>, <Task1_2/>],
  [<TaskInfo1_3/>, <Task1_3/>],
  [<TaskInfo1_4/>, <Task1_4/>],
  [<TaskInfo1_5/>, <Task1_5/>],
  [<TaskInfo1_6/>, <Task1_6/>],
  [<TaskInfo1_7/>, <Task1_7/>],
  [<TaskInfo1_8/>, <Task1_8/>],
]

export const chapterRefs = [
  [<Chapter1/>, [<Chapter1_1/>, <Chapter1_2/>,<Chapter1_3/>]],
  [<Chapter2/>, [<Chapter2_1/>, <Chapter2_2/>,<Chapter2_3/>]],
  [<Chapter3/>, [<Chapter3_1/>, <Chapter3_2/>,<Chapter3_3/>]],
  [<Chapter4/>, [<Chapter4_1/>, <Chapter4_2/>,<Chapter4_3/>]],
  [<Chapter5/>, [<Chapter5_1/>, <Chapter5_2/>,<Chapter5_3/>]],
  [<Chapter6/>, [<Chapter6_1/>, <Chapter6_2/>,<Chapter6_3/>]],
  [<Chapter7/>, [<Chapter7_1/>, <Chapter7_2/>,<Chapter7_3/>]],
  [<Chapter8/>, [<Chapter8_1/>, <Chapter8_2/>,<Chapter8_3/>]],
]

const Course = ({resolution}) => {

  window.resizeTo(...resolution)
  window.electron.ipcRenderer.sendMessage('center')

  return (
      <CoursePageWrapper>
        <ChapterTitle>
          Інформація про курс
        </ChapterTitle>
        <ChapterParagraph>
          Курс Теорії Автоматизації Управління 1.0<br></br>
          Курс складається з восьми тем, в кожній по три підтеми, та восьми задач. <br></br>
          В курсі буде розглянуто основи теорії автоматичного управління та аналіз динамічних систем.
          Окрім цього, буде розглянуто побуддову моделей систем та аналіз їх характеристик.
          Для проходження курсу потрібно пройти усі вісім задач. <br></br>
        </ChapterParagraph>
        <ChapterParagraph>
          Теми курсу: <br></br>
          Вступ до САУ <br></br>
          1) Поняття САУ. Графічне представлення САУ. Типи САУ. Принципи регулювання САУ. <br></br>
          - Історія САУ <br></br>
          - Основні терміни та позначення. Класифікація САУ <br></br>
          - Принципи регулювання САУ <br></br>
          2) Опис САУ дифф.рівняннями. Лінеаризація. Перетворення Лапласа і передавальна функція. <br></br>
          - Представлення САУ динамічними ланцюжками <br></br>
          - Лінеаризація. Типові вхідні сигнали <br></br>
          - Перетворення Лапласа. Передавальна функція <br></br>
          3) Тимчасові та частотні характеристики передавальної функції. <br></br>
          - Перехідна характеристика. Імпульсна характеристика <br></br>
          - КПФ. Амплітудно-фазово-частотна характеристика. <br></br>
          - Аналіз графіків характеристик <br></br>
          4) Логарифмічні частотні характеристики. <br></br>
          - Логарифмічна амплітудно-частотна характеристика <br></br>
          - Логарифмічна фазова частотна характеристика <br></br>
          - Аналіз графіків характеристик <br></br>
          5) Типові динамічні ланцюжки.<br></br>
          - Класифікація ланцюжків<br></br>
          - Ланцюжки першого порядку<br></br>
          - Ланцюжки другого порядку<br></br>
          6) Приведення багатоконтурних схем в одноконтурну. Побудова часових і частотних характеристик для багатоконтурних систем.<br></br>
          - Передавальні функції з'єднань ланцюжків<br></br>
          - Перетворення структурних схем<br></br>
          - Характеристики розімкнутої системи<br></br>
          7) Стійкість САУ. Критерії стійкості.<br></br>
          - Визначення стійкості<br></br>
          - Алгебраїчні, фазові та частотні критерії стійкості<br></br>
          - Запас стійкості<br></br>
          8) Якість перехідних процесів САУ. Підвищення точності САУ. Регулятори.<br></br>
          - Показники перехідного процесу<br></br>
          - Точність САУ за різних видів збурень<br></br>
          - Методи підвищення точності. ПІД-регулятор.<br></br>
        </ChapterParagraph>
        <ChapterParagraph>
          За основу курсу було взято <br></br>
          КОНСПЕКТ<br></br>
          лекцій з дисципліни « Теорія автоматичного керування»<br></br>
          Автор: Н.Б. Репнікова
        </ChapterParagraph>
      </CoursePageWrapper>
  );
};

export default Course;
