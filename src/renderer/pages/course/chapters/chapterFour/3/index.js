import React from 'react';
import ChapterTitle from '../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../components/coursePageElements/courseText/chapterParagraph';
import CoursePageWrapper from '../../../../../components/coursePageElements/coursePageWrapper';
import TaskImage from '../../../../../components/taskPageElements/taskImage';

import img71 from '../../../../../../../assets/images/71.png'
import img72 from '../../../../../../../assets/images/72.png'
import img73 from '../../../../../../../assets/images/73.png'
import img74 from '../../../../../../../assets/images/74.png'
import img75 from '../../../../../../../assets/images/75.png'
import img76 from '../../../../../../../assets/images/76.png'
import img77 from '../../../../../../../assets/images/77.png'
import img78 from '../../../../../../../assets/images/78.png'
import img79 from '../../../../../../../assets/images/79.png'

const Chapter4_3 = () => {
  return (
    <CoursePageWrapper>
      <ChapterTitle>Алгебраїчні, фазові та частотні критерії стійкості. Запас стійкості.</ChapterTitle>
      <ChapterParagraph>
        Питання про корені характеристичного рівняння може бути вирішене шляхом
        безпосереднього розв'язку диференціального рівняння. Однак таке пряме
        дослідження коренів можливе лише для систем 1,2,3 порядку, причому з
        підвищенням порядку труднощі їхнього знаходження істотно зростають і їхні вирази мало зручні.
      </ChapterParagraph>
      <ChapterParagraph>
        Для судження про стійкість САУ практично не потрібно знаходити коренів
        її характеристичного рівняння, тому що існують непрямі методи аналізу
        стійкості, які називаються критеріями стійкості. Розрізняють:
      </ChapterParagraph>
      <ChapterParagraph>
        Алгебраїчні критерії ( Рауса, 1877р.; Гурвіца, 1895р.; Льенара-Шипара,1914р. та ін.);
      </ChapterParagraph>
      <ChapterParagraph>
        Частотні критерії (Михайлова, 1938р.; Найквіста 1932р.; логарифмічний).
      </ChapterParagraph>
      <ChapterParagraph>
        Алгебраїчні критерії стійкості. Критерій Гурвіца
      </ChapterParagraph>
      <ChapterParagraph>
        {`Формулювання критерію: для того щоб всі корені характеристичного рівняння a0s^n + a1s^n-1 + ... + an = 0 мали від’ємні дійсні частини, тобто лежали в лівій напівплощині коренів, необхідно й достатньо, щоб при a0 > 0 всі n визначників Гурвіца були більше нуля.`}      </ChapterParagraph>
      <ChapterParagraph>
        Головною задачею при використанні цього критерію є правильний запис визначника Гурвіца.
      </ChapterParagraph>
      <ChapterParagraph>
        Алгоритм запису визначника Гурвіца:
      </ChapterParagraph>
      <ChapterParagraph>
        a)	По головній діагоналі виписуються коефіцієнти рівняння (9.3)
        зі зростаючими індексами, починаючи з a1 і включно an;
      </ChapterParagraph>
      <ChapterParagraph>
        b)	Кожний рядок доповнюється коефіцієнтами зі зростаючими індексами
        зліва направо, так, щоб чергувалися рядки з непарними й парними індексами;
      </ChapterParagraph>
      <ChapterParagraph>
        c)	Всі місця відсутніх коефіцієнтів заповнюються нулями.
      </ChapterParagraph>
      <TaskImage src={img71} width={"500px"}/>
      <ChapterParagraph>
        Всі визначники або мінори показані у визначнику Гурвіца пунктиром, наприклад
      </ChapterParagraph>
      <TaskImage src={img72} width={"500px"}/>
      <ChapterParagraph>
        Умови перебування системи на границі стійкості випливають з умови (9.4):
      </ChapterParagraph>
      <ChapterParagraph>
        При an=0 – границя стійкості першого типу (аперіодична границя стійкості);
      </ChapterParagraph>
      <ChapterParagraph>
        При Δn-1=0 – границя стійкості другого типу (коливальна границя стійкості).
      </ChapterParagraph>
      <ChapterParagraph>
        Недоліки критерію:
        <ol>
          <li>Для аналізу стійкості систем вище четвертого порядку ускладнюється обчислення визначників;</li>
          <li>Не можна чітко представити вплив окремих параметрів системи на її стійкість.</li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>
        Коефіцієнт підсилення системи, що відповідає границі стійкості називається граничним коефіцієнтом підсилення Кгр.
        Граничний коефіцієнт підсилення системи визначають за критерієм Гурвіца з умови
      </ChapterParagraph>
      <ChapterParagraph>
        Δn-1=0
      </ChapterParagraph>
      <ChapterParagraph>
        Частотні критерії стійкості. Критерій Михайлова.
      </ChapterParagraph>
      <ChapterParagraph>
        Частотні критерії стійкості ґрунтуються на використанні частотних
        характеристик. Основна перевага частотних критеріїв полягає в тому,
        що частотні характеристики легко отримати експериментально. Крім цього,
        частотні характеристики дають можливість досить просто оцінювати вплив
        того або іншого параметра на стійкість системи.
      </ChapterParagraph>
      <ChapterParagraph>
        Нехай дано характеристичне рівняння замкненої системи
      </ChapterParagraph>
      <TaskImage src={img73} width={"500px"}/>
      <ChapterParagraph>
        Підставимо в цей багаточлен замість s уявну змінну jw. У результаті отримаємо комплексну змінну
      </ChapterParagraph>
      <TaskImage src={img74} width={"500px"}/>
      <ChapterParagraph>
        Відомо, що при перемножуванні аргументи комплексних чисел складаються.
        Тому результуючий кут повороту вектора D(jw) при зміні w від нуля до
        нескінченності буде дорівнювати сумі кутів повороту окремих співмножників
      </ChapterParagraph>
      <TaskImage src={img75} width={"500px"}/>
      <ChapterParagraph>
        Для виведення критерію Михайлова дослідимо кожний доданок виразу (5.12) окремо:
      </ChapterParagraph>
      <ChapterParagraph>
        Нехай який-небудь корінь дійсний і від’ємний, тобто s1=-a, тоді
        співмножник у виразі (9.11), обумовлений цим коренем, буде мати вигляд (a1+jw).
      </ChapterParagraph>
      <ChapterParagraph>
        Побудуємо годограф цього вектора на комплексній площині
        при зміні w від нуля до нескінченності (рис. 9.5,а).
        Результуючий кут повороту вектора буде дорівнювати +π/2.
      </ChapterParagraph>
      <ChapterParagraph>
        Нехай тепер корінь є дійсний  і додатний, тобто s1=+a тоді співмножник
        у виразі (9.11), обумовлений цим коренем, буде мати вигляд (-a1+jw).
        Аналогічні побудови показують, що результуючий кут повороту буде - -π/2.(рис. 9.5,б).
      </ChapterParagraph>
      <ChapterParagraph>
        Знак мінус вказує, що вектор повертається за годинниковою стрілкою.
      </ChapterParagraph>
      <ChapterParagraph>
        Нехай два корені, наприклад s2, s3, являють собою комплексні сполучені
        величини з негативною дійсною частиною, тобто s2,3 = -a+jb.
      </ChapterParagraph>
      <ChapterParagraph>
        Співмножники у виразі (9.11), обумовлені цими коренями,
        будуть мати вигляд (a-jb+jw)(a+jb+jw).
      </ChapterParagraph>
      <ChapterParagraph>
        Результуючий кут повороту першого вектора φ2 = π/2 + ψ.
      </ChapterParagraph>
      <ChapterParagraph>
        Результуючий кут повороту другого вектора φ3 = π/2 - ψ.
        Вектор, що відповідає добутку (a-jb+jw)(a+jb+jw), повернеться на кут φ2 + φ3 = 2(π/2).(рис. 9.5,в).
      </ChapterParagraph>
      <ChapterParagraph>
        Нехай ті ж комплексні корені мають позитивну дійсну частину, тобто s2,3 = -a+-jb.
        Роблячи побудови, аналогічні попереднім можна отримати, що результуючий
        кут повороту вектора, що відповідає добутку двох співмножників, буде φ2 + φ3 = -2(π/2)(рис. 9.5,г).
      </ChapterParagraph>
      <TaskImage src={img76} width={"500px"}/>
      <ChapterParagraph>
        Таким чином, якщо характеристичне рівняння буде мати l коренів із
        додатною дійсною частиною, то які б не були ці корені
        (дійсні або комплексні),
        їм буде відповідати сума кутів поворотів, рівна -l(π/2).
        Всім же іншим n-l кореням характеристичного рівняння,
        що мають від’ємні дійсні частини, буде відповідати сума кутів поворотів, рівна (n-l)(π/2).
      </ChapterParagraph>
      <ChapterParagraph>
        У результаті загальний кут повороту вектору D(jw) при зміні w від нуля
        до нескінченності, відповідно до формули (9.12) буде
      </ChapterParagraph>
      <TaskImage src={img77} width={"500px"}/>
      <ChapterParagraph>
        Для стійкості системи необхідно, щоб всі корені лежали у лівій
        напівплощині коренів (l=0), тому з виразу (9.13) формулюється критерій Михайлова:
      </ChapterParagraph>
      <ChapterParagraph>
        для стійкої замкненої системи n-го порядку необхідно й достатньо,
        щоб вектор D(jw), що описує криву Михайлова, при зміні частоти від нуля до
        нескінченності мав кут повороту φ = n(π/2).
      </ChapterParagraph>
      <ChapterParagraph>
        крива або годограф Михайлова для стійкої системи має форму спіралі,
        починаючись при w=0 на дійсній додатній осі, охоплює проти годинникової
        стрілки початок координат, проходячи послідовно n квадрантів, де n - порядок системи.
      </ChapterParagraph>
      <ChapterParagraph>
        Кінець годографа йде в нескінченність у тому квадранті, номер якого дорівнює ступеню характеристичного рівняння (рис. 9.6).
      </ChapterParagraph>
      <ChapterParagraph>
        Третє формулювання критерію:
      </ChapterParagraph>
      <ChapterParagraph>
        Щоб замкнута система була стійкою необхідно й достатньо чергування нулів
        уявної та дійсної частин характеристичного рівняння D(jw) при зміні частоти від нуля до нескінченності.
      </ChapterParagraph>
      <TaskImage src={img78} width={"500px"}/>
      <ChapterParagraph>
        Умовою знаходження системи на границі стійкості є:
      </ChapterParagraph>
      <ChapterParagraph>
        a)	Відсутність вільного члена характеристичного полінома an=0 - у цьому випадку годограф Михайлова йде з початку координат (рис. 9.7,а);
      </ChapterParagraph>
      <ChapterParagraph>
        b)	Рівність нулю лівої частини характеристичного рівняння, тобто D(jw0) = U(w0) + jV(w0) = 0
        - в цьому випадку годограф буде мати вигляд, представлений на малюнку 9.7,б.
      </ChapterParagraph>
      <TaskImage src={img79} width={"500px"}/>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
      <ChapterParagraph>

      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default Chapter4_3;
