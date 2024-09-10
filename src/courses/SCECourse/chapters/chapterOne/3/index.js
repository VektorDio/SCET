import React from 'react';
import CoursePageWrapper from '../../../../../renderer/components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../renderer/components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import TaskImage from '../../../../../renderer/components/taskPageElements/taskImage';

import img6 from '../../../../../../assets/images/6.png';
import img7 from '../../../../../../assets/images/7.png';
import img8 from '../../../../../../assets/images/8.png';

function Chapter1_3() {
  return (
    <CoursePageWrapper>
      <ChapterTitle>Принципи регулювання САУ.</ChapterTitle>
      <ChapterParagraph>
        Залежно від способів формування управляючого впливу розрізняють наступні
        принципи управління:
        <ol>
          <li>за збуренням;</li>
          <li>за відхиленням;</li>
          <li>комбінованого управління.</li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>Принцип управління за збуренням</ChapterParagraph>
      <ChapterParagraph>
        Для зменшення або усунення відхилення регульованої величини від
        потрібного значення, викликаного впливом того чи іншого фактору
        необхідно, щоб управляючий вплив був певною функцією цього фактору та
        характеристик об&apos;єкта регулювання.
      </ChapterParagraph>
      <ChapterParagraph>
        Якщо під фактором, що викликає відхилення розуміється яке-небудь
        збурення, то йому відповідає принцип управління за збуренням. При
        управлінні за збуренням ставиться задача компенсації впливу збурення на
        керовану величину (рис. 1.2),
      </ChapterParagraph>
      <TaskImage src={img6} width="500px" />
      <ChapterParagraph>
        У системах, побудованих за цим принципом, регулюючий вплив виробляється
        залежно від збурення, що діє в системі
      </ChapterParagraph>
      <ChapterParagraph>u&apos;(t) = u(t)+-uk(t)</ChapterParagraph>
      <ChapterParagraph>
        Компенсаційний канал може включати наступні ланки: вимірювач,
        перетворювач, підсилювальна ланка. Перевагою принципу регулювання за
        збуренням є порівняно висока швидкодія.
      </ChapterParagraph>
      <ChapterParagraph>
        Недоліком принципу є труднощі виміру збурень, більше того, не всі
        збурення, що діють в системі відомі. Тому зазвичай при побудові даного
        принципу враховується найвпливовіше збурення і по ньому будується
        компенсаційний канал. При цьому точність системи буде низькою, бо
        збурення, за якими немає зв&apos;язків - не компенсуються. Підкреслимо,
        що розглянуті системи є розімкнутими.
      </ChapterParagraph>
      <ChapterParagraph>
        Розімкнута система управління - система, у якій відсутній зворотний
        зв&apos;язок, тобто вихідна змінна об&apos;єкта управління не
        вимірюється, не контролюється, і ніяк не впливає на вхід цього
        об&apos;єкта.
      </ChapterParagraph>
      <ChapterParagraph>Принцип управління за відхиленням</ChapterParagraph>
      <ChapterParagraph>
        Для реалізації цього принципу необхідно за допомогою чутливого елемента
        виміряти поточне значення регульованого параметру об&apos;єкта
        управління і визначити в елементі порівняння (ЕП) значення відхилення
        регульованого параметра від заданого
      </ChapterParagraph>
      <ChapterParagraph>e(t)=x(t)-y(t)</ChapterParagraph>
      <ChapterParagraph>
        де e(t) - сигнал розугодження, відхилення або похибка системи.
      </ChapterParagraph>
      <TaskImage src={img7} width="500px" />
      <ChapterParagraph>
        Вимірювання відхилення регульованої величини від задавального впливу,
        досягається введенням зворотного зв&apos;язку. Існують як від&apos;ємні,
        так і додатні зворотні зв&apos;язки.
      </ChapterParagraph>
      <ChapterParagraph>
        Від&apos;ємний зворотний зв&apos;язок - канал, по якому вихідний сигнал
        повертається на вхід системи і віднімається від вхідного сигналу.
      </ChapterParagraph>
      <ChapterParagraph>
        Додатній зворотний зв&apos;язок - канал, по якому вихідний сигнал
        повертається на вхід системи і складається з вхідним сигналом.
      </ChapterParagraph>
      <ChapterParagraph>
        Залежно від величини та знаку e(t) регулятор виробляє регулюючий вплив,
        що прагне це відхилення звести до нуля (рис. 2.2).
      </ChapterParagraph>
      <ChapterParagraph>
        Перевагою принципу регулювання за відхиленням є можливість досягнення
        високої точності, що забезпечує широке застосування таких САУ та вони є
        замкнутими.
      </ChapterParagraph>
      <ChapterParagraph>
        Недоліки:
        <ol>
          <li>
            більш низька швидкодія, у порівнянні з регулюванням за збуренням;
          </li>
          <li>
            наявність зворотного зв&apos;язку може привести до втрати стійкості
            системи.
          </li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>Принцип комбінованого управління</ChapterParagraph>
      <ChapterParagraph>
        Комбінована система регулювання містить як зворотний зв&apos;язок, так і
        компенсаційний канал за збуренням; можливий зв&apos;язок за задавальним
        впливом (пунктир на рис. 1.4).
      </ChapterParagraph>
      <TaskImage src={img8} width="500px" />
      <ChapterParagraph>
        Стратегія побудови такої системи полягає в тому, що вибирають одне із
        сильних збурень, що діють у системі і для нього будують компенсаційний
        канал. Всі інші збурення компенсуються зворотним зв&apos;язком. Таким
        чином, регулюючий вплив є функцією відхилення регульованої величини і
        збурення.
      </ChapterParagraph>
      <ChapterParagraph>
        Перевагою комбінованих САУ є їхня висока точність і швидкодія.
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default Chapter1_3;
