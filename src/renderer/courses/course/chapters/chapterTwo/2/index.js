import React from 'react';
import CoursePageWrapper from '../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../components/coursePageElements/courseText/chapterParagraph';

import img11 from '../../../../../../../assets/images/11.png';
import img12 from '../../../../../../../assets/images/12.png';
import img13 from '../../../../../../../assets/images/13.png';
import img14 from '../../../../../../../assets/images/14.png';
import TaskImage from '../../../../../components/taskPageElements/taskImage';

function Chapter2_2() {
  return (
    <CoursePageWrapper>
      <ChapterTitle>Лінеаризація. Типові вхідні сигнали.</ChapterTitle>
      <ChapterParagraph>
        При складанні диференціальних рівнянь використовуються фізичні закони,
        які обумовлюють поводження даної ланки. Такими законами можуть бути,
        наприклад, закон збереження речовини (об'єкти регулювання тиску, рівня),
        закон збереження енергії (об'єкти регулювання температури), закон
        рівноваги е.р.с. (електричні ланцюги) та ін.
      </ChapterParagraph>
      <ChapterParagraph>
        Якщо при складанні рівнянь взяти до уваги всі фактори, що впливають на
        динамічні і статичні властивості ланки, то рівняння вийде складним і у
        більшості випадків нелінійним.
      </ChapterParagraph>
      <ChapterParagraph>
        Дослідження нелінійних рівнянь пов'язано зі значними труднощами. Тому в
        тих випадках, коли це можливо, виконується заміна нелінійних рівнянь
        наближеними до них лінійними диференціальними рівняннями з постійними
        коефіцієнтами. Така операція називається лінеаризацією.
      </ChapterParagraph>
      <ChapterParagraph>
        Найчастіше нелінійні ланки описуються статичними характеристиками (СХ),
        які визначають функціональну залежність між постійними значеннями та
        значеннями, що повільно змінюються, входів і виходів x вих = f(x вх).
        Усталений режим ланки визначається координатами х вих і х вх ( рис.
        3.3).
      </ChapterParagraph>
      <TaskImage src={img11} width="400px" />
      <ChapterParagraph>
        Припустимо, що в околі m функція є неперервною, тоді її можна розкласти
        в ряд Тейлора:
      </ChapterParagraph>
      <TaskImage src={img12} width="800px" />
      <ChapterParagraph>
        Таким чином, лінеаризація нелінійної статичної характеристики полягає в
        наближеному описі її двома членами ряду.
      </ChapterParagraph>
      <ChapterParagraph>
        Переходячи до рівнянь у відхиленнях, одержуємо:
      </ChapterParagraph>
      <TaskImage src={img13} width="800px" />
      <ChapterParagraph>
        Графічна інтерпретація лінеаризації полягає в заміні дійсної нелінійної
        характеристики, дотичною до неї в точці, що відповідає усталеному
        режиму. Лінеаризація можлива в САУ, тому що відхилення регульованої
        величини (та інших змінних), від усталеного значення, мала величина.
      </ChapterParagraph>
      <ChapterParagraph>
        Якщо ланка має два входи і один вихід, то рівняння лінеаризації матиме
        вигляд:
      </ChapterParagraph>
      <TaskImage src={img14} width="800px" />
      <ChapterParagraph>
        Диференціальні рівняння (3.3) і (3.4) описують ту ж ланку, але
        відрізняються від вихідних наступним:
        <ol>
          <li>
            ці рівняння наближені, тому що в процесі виводу ми відкинули
            диференціали вищих порядків,
          </li>
          <li>
            невідомі функції часу в цих рівняннях є не колишні величини, а їхні
            відхилення,
          </li>
          <li>отримані рівняння є лінійними з постійними коефіцієнтами.</li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>
        При складанні диференціальних рівнянь дотримуються наступних правил:
        <ol>
          <li>
            вихідна величина і її похідні перебувають у лівій частині рівняння;
          </li>
          <li>
            вхідна величина і її похідні перебувають у правій частині рівняння;
          </li>
          <li>коефіцієнт при вихідній величині дорівнює одиниці. </li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>Типові вхідні сигнали (впливи)</ChapterParagraph>
      <ChapterParagraph>
        Для теоретичного дослідження впливи, що надходять на вхід системи,
        незалежно від їхньої фізичної природи, замінюються деякими функціями
        часу, що описують закон зміни в часі реального сигналу.
      </ChapterParagraph>
      <ChapterParagraph>
        Характер цих функцій визначається умовами роботи системи і може бути
        найрізноманітнішим. Для спрощення дослідження використовується лише
        обмежене число найбільш характерних типових видів сигналів:
      </ChapterParagraph>
      <ChapterParagraph>
        Одинична східчаста функція або одиничний стрибок являє собою математичну
        ідеалізацію реального процесу досить швидкої зміни сигналу від нуля до
        деякого значення прийнятого за одиницю, що потім залишається незмінним
      </ChapterParagraph>
      <ChapterParagraph>
        {'1(t) = 0, при t < 0; 1, при t >= 0;'}
      </ChapterParagraph>
      <ChapterParagraph>
        Одинична імпульсна функція, або дельта-функція (функція Дірака) являє
        собою імпульс нескінченно великої амплітуди і нескінченно малої
        тривалості
      </ChapterParagraph>
      <ChapterParagraph>𝛿(t) = ∞, при t = 0; 0, при t != 0;</ChapterParagraph>
      <ChapterParagraph>
        Площа імпульсу дорівнює одиниці. Дельта-функція є похідною від одиничної
        східчастої функції.
      </ChapterParagraph>
      <ChapterParagraph>Лінійно зростаючий сигнал</ChapterParagraph>
      <ChapterParagraph>x(t) = Vt</ChapterParagraph>
      <ChapterParagraph>
        Сигнал, що змінюється з постійним прискоренням
      </ChapterParagraph>
      <ChapterParagraph>x(t) = (t^2)/2</ChapterParagraph>
      <ChapterParagraph>Гармонійний вхідний сигнал</ChapterParagraph>
      <ChapterParagraph>x(t) = A * sin(wt)</ChapterParagraph>
      <ChapterParagraph>
        де А – амплітуда і ω - кутова частота впливу.
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default Chapter2_2;
