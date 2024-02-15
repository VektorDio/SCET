import React from 'react';
import CoursePageWrapper from '../../../../../renderer/components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../renderer/components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import TaskImage from '../../../../../renderer/components/taskPageElements/taskImage';

import img20 from '../../../../../../assets/images/20.png';
import img21 from '../../../../../../assets/images/21.png';
import img22 from '../../../../../../assets/images/22.png';
import img23 from '../../../../../../assets/images/23.png';
import img24 from '../../../../../../assets/images/24.png';
import img25 from '../../../../../../assets/images/25.png';
import img26 from '../../../../../../assets/images/26.png';
import img27 from '../../../../../../assets/images/27.png';
import img28 from '../../../../../../assets/images/28.png';
import img29 from '../../../../../../assets/images/29.png';
import img30 from '../../../../../../assets/images/30.png';

function Chapter3_1() {
  return (
    <CoursePageWrapper>
      <ChapterTitle>
        Перехідна характеристика. Імпульсна характеристика. КПФ.
      </ChapterTitle>
      <ChapterParagraph>
        Динамічні властивості лінійних САУ і їхніх ланок описуються за допомогою
        диференціальних рівнянь і передавальних функцій, як було показано вище,
        а також графічними характеристиками, часовими і частотними, які, як
        правило, становлять обов'язкову частину аналізу систем управління.
      </ChapterParagraph>
      <ChapterParagraph>
        Аналітичні вирази для цих характеристик одержують на підставі
        розв'язання диференціального рівняння.
      </ChapterParagraph>
      <ChapterParagraph>Часові характеристики</ChapterParagraph>
      <ChapterParagraph>
        Перехідна характеристика - це реакція ланки або системи на одиничний
        стрибок. Аналітичний вираз для побудови перехідної характеристики
        визначається як
      </ChapterParagraph>
      <TaskImage src={img20} width="600px" />
      <ChapterParagraph>
        виходячи з того, що x(t)=1(t), його зображення буде X(s)=1/s, тоді
      </ChapterParagraph>
      <TaskImage src={img21} width="600px" />
      <ChapterParagraph>
        Імпульсна (вагова) характеристика – це реакція ланки або системи на
        дельта-функцію 𝛿(t).
      </ChapterParagraph>
      <TaskImage src={img22} width="600px" />
      <ChapterParagraph>
        виходячи з того, що x(t)=𝛿(t), його зображення буде X(s)=1 , тоді
      </ChapterParagraph>
      <TaskImage src={img23} width="600px" />
      <ChapterParagraph>
        Частотні характеристики. Комплексна передавальна функція
      </ChapterParagraph>
      <ChapterParagraph>
        Частотні характеристики описують усталені вимушені коливання на виході
        ланки, викликані гармонійним впливом на його вході
      </ChapterParagraph>
      <TaskImage src={img24} width="600px" />
      <ChapterParagraph>
        де A1 - амплітуда, а w - кутова частота.
      </ChapterParagraph>
      <ChapterParagraph>
        На виході лінійної ланки в усталеному режимі буде так само гармонійна
        функція тієї ж частоти, але загалом, буде відрізнятися від вхідного
        сигналу за амплітудою та фазою:
      </ChapterParagraph>
      <TaskImage src={img25} width="600px" />
      <ChapterParagraph>
        Знайдемо співвідношення між вихідною і вхідною гармонійними величинами
        для ланки, що описується диференціальним рівнянням (4.6), застосовуючи
        звичайний спосіб пошуку його часткового розв'язку. Підставляючи в
        рівняння (4.5) функції входу, виходу і похідну виходу одержимо
      </ChapterParagraph>
      <TaskImage src={img26} width="600px" />
      <ChapterParagraph>
        Вираз (4.8) називається комплексною передавальною функцією (КПФ) і являє
        собою відношення зображень у формі комплексних чисел вихідної і вхідної
        величин ланки або системи в усталеному режимі гармонійних коливань.
      </ChapterParagraph>
      <ChapterParagraph>
        КПФ ще називають комплексним коефіцієнтом підсилення, комплексною
        частотною функцією або частотною характеристикою. Комплексна
        передавальна функція може бути представлена у вигляді:
      </ChapterParagraph>
      <TaskImage src={img27} width="600px" />
      <ChapterParagraph>
        Крива залежності модуля N(w) комплексної передавальної функції від
        частоти називається амплітудною частотною характеристикою.
      </ChapterParagraph>
      <ChapterParagraph>
        Крива залежності аргументу φ(w) від частоти називається фазовою
        частотною характеристикою.
      </ChapterParagraph>
      <ChapterParagraph>
        Крива, описувана кінцем вектору КПФ ланки або системи при зміні частоти
        w від 0 до ∞ називається амплітудно-фазовою частотною характеристикою
        (АФЧХ).
      </ChapterParagraph>
      <ChapterParagraph>
        Розглянемо приклад побудови частотних характеристик. Нехай передавальна
        функція має вигляд:
      </ChapterParagraph>
      <TaskImage src={img28} width="400px" />
      <ChapterParagraph>
        Для побудови частотних характеристик перейдемо до комплексної
        передавальної функції шляхом підстановки s = jw.
      </ChapterParagraph>
      <TaskImage src={img29} width="600px" />
      <ChapterParagraph>
        Модуль комплексної передавальної функції N(ω) пропорційний коефіцієнту
        підсилення розімкнутої системи k.
      </ChapterParagraph>
      <ChapterParagraph>
        Графік АФЧХ для цієї ланки представлений на рис. 4.3. Кожному значенню
        частоти w на комплексній площині U, V відповідає точка, координати якої
        визначаються парою значень U(w) і V(w) або N(w) і φ(w).
      </ChapterParagraph>
      <TaskImage src={img30} width="600px" />
    </CoursePageWrapper>
  );
}

export default Chapter3_1;
