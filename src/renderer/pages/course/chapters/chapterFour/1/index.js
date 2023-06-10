import React from 'react';
import CoursePageWrapper from '../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskImage from '../../../../../components/taskPageElements/taskImage';

import img44 from '../../../../../../../assets/images/44.png'
import img45 from '../../../../../../../assets/images/45.png'
import img46 from '../../../../../../../assets/images/46.png'
import img47 from '../../../../../../../assets/images/47.png'
import img48 from '../../../../../../../assets/images/48.png'
import img49 from '../../../../../../../assets/images/49.png'
import img50 from '../../../../../../../assets/images/50.png'
import img51 from '../../../../../../../assets/images/51.png'
import img52 from '../../../../../../../assets/images/52.png'
import img53 from '../../../../../../../assets/images/53.png'
import img54 from '../../../../../../../assets/images/54.png'
import img55 from '../../../../../../../assets/images/55.png'
import img56 from '../../../../../../../assets/images/56.png'
import img57 from '../../../../../../../assets/images/57.png'
import img58 from '../../../../../../../assets/images/58.png'
import img59 from '../../../../../../../assets/images/59.png'
import img60 from '../../../../../../../assets/images/60.png'
import img61 from '../../../../../../../assets/images/61.png'
import img62 from '../../../../../../../assets/images/62.png'
import img63 from '../../../../../../../assets/images/63.png'
import img64 from '../../../../../../../assets/images/64.png'
const Chapter4_1 = () => {
  return (
    <CoursePageWrapper>
      <ChapterTitle>Класифікація ланцюжків. Ланцюжки першого і другого порядків.</ChapterTitle>
      <ChapterParagraph>
        Як вже було сказано, для розрахунку різних систем автоматичного управління,
        вони звичайно розбиваються на динамічні ланки.
      </ChapterParagraph>
      <ChapterParagraph>
        Під динамічною ланкою розуміють пристрій будь-якого фізичного вигляду і
        конструктивного виконання, але описуваного певним диференціальним рівнянням.
      </ChapterParagraph>
      <ChapterParagraph>
        Будь-яка САУ, якою б складною вона не була, може бути представлена у
        вигляді сукупності деяких найпростіших елементів – типових динамічних ланок.
      </ChapterParagraph>
      <ChapterParagraph>
        Типовими динамічними ланками називаються ланки, які описуються
        диференціальним рівнянням не вище другого порядку.
      </ChapterParagraph>
      <TaskImage src={img44} width={"800px"}/>
      <ChapterParagraph>
        Спрощена класифікація типових динамічних ланок за виглядом передавальних
        функцій включає 10, 17, 19 та 24 різновидів ланок, однак всі вони утворюють
        три великі групи: статичні (позиційні), інтегруючі (астатичні) і диференціюючі (форсуючі).
      </ChapterParagraph>
      <ChapterParagraph>
        Відповідно до цього в таблиці 6.1 наведені передавальні функції десяти
        різновидів, так званих типових динамічних ланок, а їхні характеристики
        розглядаються більш докладно нижче.
      </ChapterParagraph>
      <ChapterParagraph>
        Аналіз типових ланок будемо виконувати за наступним алгоритмом:
        <ol>
          <li>диференціальне рівняння;</li>
          <li>передавальна функція;</li>
          <li>часові характеристики (перехідна, імпульсна);</li>
          <li>частотні характеристики (АФЧХ, ЛХ );</li>
          <li>приклади.</li>
        </ol>
        Всі теоретичні (математичні) передумови даного алгоритму розглянуті в попередньому розділі.
      </ChapterParagraph>
      <ChapterParagraph>
        Ідеальна (безінерційна, підсилювальна) ланка
      </ChapterParagraph>
      <TaskImage src={img45} width={"700px"}/>
      <ChapterParagraph>
        Приклади: механічний редуктор (без урахування скручування та люфту;
        безінерційний (широкосмуговий) підсилювач; дільник напруги;
        важільне з'єднання; первинні перетворювачі (датчики) - потенціометричні,
        індуктивні, обертові трансформатори, тахогенератори та ін.
      </ChapterParagraph>
      <ChapterParagraph>
        Аперіодична ланка першого порядку
      </ChapterParagraph>
      <TaskImage src={img46} width={"700px"}/>
      <TaskImage src={img47} width={"700px"}/>
      <ChapterParagraph>
        Приклади: генератор постійного струму; двигун будь-якого типу
        (електричний, гідравлічний, пневматичний і т.п.), механічні
        характеристики якого – прямі лінії, для різних
        ( якоря в електродвигуні, витрата   рідини в гідродвигуні і т.п.);
        резервуар з газом, рідиною (  перед впускним отвором,   у резервуарі);
        нагрівальна піч (  - кількість теплоти, що надходить в одиницю часу,  );
        термопара; тиристорні, електромагнітні підсилювачі, гідро -, пневмо-підсилювачі та ін.
      </ChapterParagraph>
      <ChapterParagraph>
        Ідеальна інтегруюча ланка
      </ChapterParagraph>
      <TaskImage src={img48} width={"700px"}/>
      <TaskImage src={img49} width={"700px"}/>
      <ChapterParagraph>
        Приклади: обертовий вал; гідравлічний резервуар; гідравлічний підсилювач; електродвигун.
      </ChapterParagraph>
      <ChapterParagraph>
        Ізодромна ланка першого порядку
      </ChapterParagraph>
      <TaskImage src={img50} width={"700px"}/>
      <TaskImage src={img51} width={"700px"}/>
      <ChapterParagraph>
        Приклади: комбінація пружини з демпфером (як вхідна величина тут
        розглядається прикладена сила, а в якості вихідної -
        переміщення х точки в якій прикладена сила); при використанні операційного
        підсилювача ізодромна ланка може бути отримана за
        допомогою застосування RC-ланцюга у зворотному зв'язку.
      </ChapterParagraph>
      <ChapterParagraph>
        Реально інтегруюча ланка
      </ChapterParagraph>
      <TaskImage src={img52} width={"700px"}/>
      <TaskImage src={img53} width={"700px"}/>
      <ChapterParagraph>
        Приклади: операційний підсилювач у режимі інтегрування;
        гідравлічний демпфер; гіроскоп;
        гідравлічний двигун, виходом якого є переміщення поршня,
        а входом - тиск рідини, що подається в циліндр.
      </ChapterParagraph>
      <ChapterParagraph>
        Ідеальна диференціююча ланка
      </ChapterParagraph>
      <TaskImage src={img54} width={"700px"}/>
      <TaskImage src={img55} width={"700px"}/>
      <ChapterParagraph>
        Приклади: використовуються для реалізації ємності (якщо x=U, y=C*(dU/dt));
        індуктивності (якщо x=i,y=L(di/dt)) в електричних ланцюгах.
      </ChapterParagraph>
      <ChapterParagraph>
        Реально диференціююча ланка
      </ChapterParagraph>
      <TaskImage src={img56} width={"700px"}/>
      <TaskImage src={img57} width={"700px"}/>
      <ChapterParagraph>
        Приклади: тахогенератор постійного струму
        (в якості вхідної величини розглядати кут повороту його ротора,
        а в якості вихідної - е.р.с. якоря ); операційний підсилювач у режимі диференціювання.
      </ChapterParagraph>
      <ChapterParagraph>
        Диференціююча ланка з уповільненням у принципі вже не є типовою,
        тому що її можна замінити послідовним з'єднання ідеальної диференціюючої
        ланки і аперіодичної ланки першого порядку.
      </ChapterParagraph>
      <ChapterParagraph>
        Диференціальні рівняння, що описують ланки другого порядку можна представити в загальному вигляді як:
      </ChapterParagraph>
      <ChapterParagraph>
        (a2 * s^2 + a1 * s + a0) * Y(s) = kX(s)
      </ChapterParagraph>
      <ChapterParagraph>
        Залежно від коренів a+-jb характеристичного рівняння
        (a2 * s^2 + a1 * s + a0) = 0 (а вони можуть бути дійсними, комплексними і уявними) ланки поділяються на:
        <ol>
          <li>аперіодичні другого порядку, якщо корені дійсні (b = 0);</li>
          <li>консервативні, якщо корені уявні (a = 0);</li>
          <li>коливальні, якщо корені комплексні (a+-b).</li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>
        Аперіодична ланка другого порядку
      </ChapterParagraph>
      <TaskImage src={img58} width={"700px"}/>
      <TaskImage src={img59} width={"700px"}/>
      <TaskImage src={img60} width={"700px"}/>
      <ChapterParagraph>
        Консервативна ланка
      </ChapterParagraph>
      <TaskImage src={img61} width={"700px"}/>
      <TaskImage src={img62} width={"700px"}/>
      <ChapterParagraph>
        Коливальна ланка
      </ChapterParagraph>
      <TaskImage src={img63} width={"700px"}/>
      <TaskImage src={img64} width={"700px"}/>
    </CoursePageWrapper>
  );
};

export default Chapter4_1;
