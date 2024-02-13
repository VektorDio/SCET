import React from 'react';
import CoursePageWrapper from '../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../components/coursePageElements/courseText/chapterParagraph';
import TaskImage from '../../../../../components/taskPageElements/taskImage';

import img31 from '../../../../../../assets/images/31.png'
import img32 from '../../../../../../assets/images/32.png'
import img33 from '../../../../../../assets/images/33.png'
import img34 from '../../../../../../assets/images/34.png'
import img35 from '../../../../../../assets/images/35.png'
import img36 from '../../../../../../assets/images/36.png'
import img37 from '../../../../../../assets/images/37.png'
import img38 from '../../../../../../assets/images/38.png'
import img39 from '../../../../../../assets/images/39.png'
import img40 from '../../../../../../assets/images/40.png'
import img41 from '../../../../../../assets/images/41.png'
import img42 from '../../../../../../assets/images/42.png'
import img43 from '../../../../../../assets/images/43.png'

const Chapter3_2 = () => {
  return (
    <CoursePageWrapper>
      <ChapterTitle>АФЧХ і ЛФЧХ.</ChapterTitle>
      <ChapterParagraph>
        Побудова амплітудно-фазових частотних характеристик складних систем
        пов'язана з великою трудомісткістю. Дослідження САУ значно спрощується,
        якщо користуватися частотними характеристиками, побудованими в
        логарифмічному масштабі, тобто логарифмічними частотними характеристиками (ЛЧХ).
      </ChapterParagraph>
      <ChapterParagraph>
        Простота методу ЛЧХ пояснюється простотою побудови самих характеристик:
        <ol>
          <li>Логарифмічна частотна характеристика утворюється шляхом додавання
            характеристик кількох ланок (при побудові АФЧХ системи необхідно перемножувати АФЧХ декількох її ланок);</li>
          <li>Точні логарифмічні характеристики замінюються відрізками прямих - асимптотами.</li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>
        З'ясуємо, що являють собою ЛЧХ. Для цього запишемо комплексну передавальну функцію в показовій формі
      </ChapterParagraph>
      <TaskImage src={img31} width={"600px"}/>
      <ChapterParagraph>
        Крива залежності логарифма модуля ln(N(w)) комплексної передавальної функції
        від частоти, відкладеної по осі абсцис у логарифмічному масштабі,
        називається логарифмічною амплітудно-частотною характеристикою (ЛАЧХ).
      </ChapterParagraph>
      <ChapterParagraph>
        Звичайно на графіку по осі ординат прийнято відкладати не ln(N(w)),
        а пропорційну їй величину L(w)=20lg(N(w)), що вимірюється в децибелах
        (1 бел - підсилення потужності в 10 разів).
      </ChapterParagraph>
      <ChapterParagraph>
        Залежність аргументу φ(w) КПФ від частоти,
        відкладеної по осі абсцис у логарифмічному масштабі,
        називається логарифмічною фазовою частотною характеристикою (ЛФЧХ).
      </ChapterParagraph>
      <ChapterParagraph>
        При побудові логарифмічного масштабу, частоти по осі абсцис
        відкладаються відрізками, пропорційними не самим частотам,
        а логарифмам частот, як показано на рис.5.1.
      </ChapterParagraph>
      <TaskImage src={img32} width={"600px"}/>
      <ChapterParagraph>
        Але для зручності використання логарифмічного масштабу частот
        на осі абсцис ставлять значення самих частот, логарифми яких відкладені по осі.
      </ChapterParagraph>
      <ChapterParagraph>
        На рисунку також наведені ілюстрації до понять октави і декади.
        Так, якщо дві частоти відрізняться одна від іншої в 2 рази, то кажуть,
        що ці частоти відрізняються на одну октаву, а якщо в 10 разів - то кажуть,
        що частоти відрізняються на одну декаду.
      </ChapterParagraph>
      <ChapterParagraph>
        Розглянемо алгоритми побудови логарифмічних амплітудних характеристик простих виразів:
      </ChapterParagraph>
      <TaskImage src={img33} width={"600px"}/>
      <ChapterParagraph>
        {'При цьому, якщо k > 1, то ЛАЧХ проходить вище осі абсцис, при k < 1 - нижче осі.'}
      </ChapterParagraph>
      <TaskImage src={img34} width={"600px"}/>
      <ChapterParagraph>
        З формули (5.4) видно, що ЛАЧХ цього виразу - це сума двох доданків.
        Побудова логарифмічної характеристики для першого доданку 20lg(k) вже була
        розглянута в пункті а) і це пряма лінія, паралельна осі частот.
      </ChapterParagraph>
      <ChapterParagraph>
        Другий доданок -20lg(w) залежить від частоти, і для його побудови задамося
        кількома частотами та визначимо ординати графіка при цих частотах.
      </ChapterParagraph>
      <TaskImage src={img35} width={"600px"}/>
      <ChapterParagraph>
        З рис. 5.3 видно, що доданок -20lg(w) графічно зображується прямою,
        проведеною під нахилом до осі частот і цей нахил -20дб/дек.
        Для отримання логарифмічної амплітудної характеристики виразу 5.4 необхідно скласти обидва графіка.
      </ChapterParagraph>
      <TaskImage src={img36} width={"600px"}/>
      <ChapterParagraph>
        Побудова логарифмічної характеристики для першого
        доданку виконується традиційно, а для побудови графіка частотної
        характеристики другого доданку побудуємо таблицю.
      </ChapterParagraph>
      <TaskImage src={img37} width={"600px"}/>
      <ChapterParagraph>
        З рисунку видно, що доданок 20lg(w) графічно зображується прямою,
        проведеною під  нахилом до осі частот і цей нахил +20дб/дек.
      </ChapterParagraph>
      <TaskImage src={img38} width={"600px"}/>
      <ChapterParagraph>
        {`Характеристика будується для області низьких і високих частот. В області низьких частот, де w <= (1/T), маємо L>>(w^2 * T^2) і тому sqrt(1 + (w^2 + T^2)) = 1. У такий спосіб вираз (2.25) для L(w) у розглянутому діапазоні частот буде мати вигляд`}
      </ChapterParagraph>
      <TaskImage src={img39} width={"600px"}/>
      <ChapterParagraph>
        тобто ЛАЧХ такого виразу в області низьких частот - це пряма, проведена на рівні 20lg(k) паралельно осі частот (пунктирна лінія на рис.5.5).
      </ChapterParagraph>
      <TaskImage src={img40} width={"600px"}/>
      <ChapterParagraph>
        {`В області високих частот, де w>>(1/T) , маємо 1<<(w^2*T^2) тому sqrt(1 + (w^2 + T^2)) = wT і вираз (2.26) буде мати вигляд:`}
      </ChapterParagraph>
      <TaskImage src={img41} width={"600px"}/>
      <ChapterParagraph>
        Перший доданок графічно зображується прямою (ми вже обговорювали
        вище алгоритм побудови). Для визначення вигляду графіка другого доданка
        задамося кількома частотами та визначимо ординати для цих частот:
      </ChapterParagraph>
      <TaskImage src={img42} width={"600px"}/>
      <ChapterParagraph>
        Через точки n і m проводимо пряму і як видно з рисунку,
        вона зображується під нахилом -20дб/дек. Складаючи обидва графіки,
        одержимо ЛАЧХ в області високих частот (лінія ACB).
      </ChapterParagraph>
      <ChapterParagraph>
        Знайдемо точку сполучення графіків низькочастотної та високочастотної
        областей. Оскільки точка C належить обом прямим, то на частоті w1 праві частини виразів
        (5.7) і (5.8) будуть дорівнювати один одному:
      </ChapterParagraph>
      <ChapterParagraph>
        20lg(k) = 20lg(k) - 20lg(w1*T)
      </ChapterParagraph>
      <ChapterParagraph>
        20lg(w1*T) = 0, звідки w1=(1/T), на цій частоті виконується сполучення
        графіків низькочастотної та високочастотної областей і ця частота називається частотою сполучення.
      </ChapterParagraph>
      <ChapterParagraph>
        По отриманих логарифмічних характеристиках можна зробити ряд висновків,
        які надалі можна використовувати як практичні рекомендації побудови ЛАЧХ, опускаючи проміжні кроки.
      </ChapterParagraph>
      <ChapterParagraph>
        Висновок 2.1. На частоті w=1 будемо відкладати 20lg(k) (точка A).
      </ChapterParagraph>
      <ChapterParagraph>
        Висновок 2.2. Обчислити частоту сполучення w=(1/T), відкласти її значення
        на осі частот та у точці зустрічі попереднього відрізка графіка
        характеристики із частотою сполучення провести пряму під нахилом -20дб\дек (точка C).
      </ChapterParagraph>
      <ChapterParagraph>
        Розглянемо алгоритми побудови логарифмічних фазочастотних характеристик (ЛФЧХ).
        Виходячи з визначення, для побудови ЛФЧХ
        необхідно визначити значення аргументу φ(w) комплексної передавальної функції W(jw)=N(w)*e^(jφ(w)).
      </ChapterParagraph>
      <ChapterParagraph>
        Наприклад:
      </ChapterParagraph>
      <ChapterParagraph>
        a)	якщо φ(w)=0, то логарифмічна фазочастотна характеристика не залежить
        від частоти і являє собою пряму, що збігається з віссю частот (рис. 5.6);
      </ChapterParagraph>
      <ChapterParagraph>
        b)	якщо φ(w)=-π/2, то логарифмічна фазочастотна характеристика також не залежить
        від частоти і ЛФЧХ – це пряма, паралельна осі частот, проведена на рівні -90°;
      </ChapterParagraph>
      <ChapterParagraph>
        c)	якщо φ(w)=-arctg(wT), то для побудови ЛФЧХ необхідно задати декілька значень
        частоти (від нуля до нескінченності) і обчислити значення ординати
        характеристики на цих частотах.
      </ChapterParagraph>
      <TaskImage src={img43} width={"600px"}/>
      <ChapterParagraph>
        Висновок 2.3. Наведена ЛФЧХ вважається типовою і при частоті сполучення w=(1/T) має ординату рівну -45°.
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default Chapter3_2;
