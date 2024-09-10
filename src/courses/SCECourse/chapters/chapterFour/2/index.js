import React from 'react';
import CoursePageWrapper from '../../../../../renderer/components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../renderer/components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../renderer/components/coursePageElements/courseText/chapterParagraph';
import TaskImage from '../../../../../renderer/components/taskPageElements/taskImage';

import img65 from '../../../../../../assets/images/65.png';
import img66 from '../../../../../../assets/images/66.png';
import img67 from '../../../../../../assets/images/67.png';
import img68 from '../../../../../../assets/images/68.png';
import img69 from '../../../../../../assets/images/69.png';
import img70 from '../../../../../../assets/images/70.png';

function Chapter4_2() {
  return (
    <CoursePageWrapper>
      <ChapterTitle>Визначення стійкості.</ChapterTitle>
      <ChapterParagraph>
        При проектуванні систем управління зі зворотним зв&apos;язком інженерам
        завжди доводиться вирішувати задачу забезпечення її стійкості, тому що
        нестійка система взагалі не має практичного змісту.
      </ChapterParagraph>
      <ChapterParagraph>
        Поняття стійкості можна проілюструвати на основі уявлень механіки. Якщо
        мати на увазі під системою деяку кулю, то можна сформулювати стосовно
        неї поняття про стійкість.
      </ChapterParagraph>
      <ChapterParagraph>
        1. Якщо куля перебуває у ввігнутій поверхні, то при наявності сили F,
        еквівалентної зовнішньому впливу, кулю можна вивести зі стану спокою
        (Рис. 9.1). Припустимо, що сила така, що куля дійшла до точки x. Якщо
        тепер зникає вплив, то очевидно, куля під впливом сили ваги після
        здійснення декількох коливань біля точки рівноваги А прийде в сталий
        стан (або стан спокою), що відповідає точці А. Це приклад стійкої
        рівноваги (система є стійкою).
      </ChapterParagraph>
      <TaskImage src={img65} width="500px" />
      <ChapterParagraph>
        2. Якщо куля перебуває на опуклій поверхні, то під впливом сили F,
        будучи відхиленою у точку x після припинення впливу сили не прийде в
        стале положення (у точку А). Такий стан системи є нестійким (Рис. 9.1).
        Якщо куля перебуває на шорсткій рівній поверхні і до неї прикладена
        сила, то куля вийде зі стану рівноваги і після зняття впливу прийде в
        новий стан рівноваги. Залежно від величини і знаку сили F куля може мати
        незліченну множину точок рівноваги. Такий стан зветься
        нейтрально-стійким, тобто система є нейтрально-стійкою.
      </ChapterParagraph>
      <TaskImage src={img66} width="500px" />
      <ChapterParagraph>
        Стійкість - це властивість САУ повертатися в заданий або близький до
        нього сталий режим після всякого виходу з нього в результаті
        якого-небудь впливу.
      </ChapterParagraph>
      <ChapterParagraph>
        Типові криві перехідних процесів у стійких і нестійких системах показані
        на рис. 9.2.
      </ChapterParagraph>
      <ChapterParagraph>
        Основним завданням САУ є вироблення таких керуючих впливів, які
        приводили б після збурення САУ до стійкого стану.
      </ChapterParagraph>
      <ChapterParagraph>
        Для лінійних САУ: стійка (нестійка) САУ стійка, або нестійка при
        будь-якому за величиною зовнішньому впливі. Для нелінійних САУ це
        питання значно складніше; стійкість може бути або в «малому», в
        «великому» й у цілому - стійкість при будь-яких початкових умовах
        (докладно про стійкість нелінійних систем у лекції 14).
      </ChapterParagraph>
      <ChapterParagraph>
        Таким чином, стійку САУ можна визначити як систему, перехідні процеси в
        якій, є загасаючими і її вихідна величина залишається обмеженою при дії
        на систему обмежених за величиною впливів.
      </ChapterParagraph>
      <ChapterParagraph>
        Уперше властивості стійкості були досліджені російським вченим О.М
        Ляпуновим в 1892 р. у роботі «Загальна задача про стійкість руху».
      </ChapterParagraph>
      <ChapterParagraph>Загальна умова стійкості САУ</ChapterParagraph>
      <ChapterParagraph>
        Для відповіді на питання про стійкість системи необхідно розв’язати
        лінеаризоване диференціальне рівняння замкненої системи:
      </ChapterParagraph>
      <TaskImage src={img67} width="600px" />
      <ChapterParagraph>
        Розв&apos;язок цього неоднорідного рівняння із правою частиною
        складається із двох доданків:
      </ChapterParagraph>
      <ChapterParagraph>
        y(t) = y вим (t) + yв(t) - частковий розв&apos;язок неоднорідного
        рівняння, що описує вимушений режим системи, що встановлюється по
        закінченню перехідного процесу, а yв(t) = yn(t) - перехідна (вільна),
        складова, знаходиться як спільний розв&apos;язок однорідного рівняння
      </ChapterParagraph>
      <TaskImage src={img68} width="600px" />
      <ChapterParagraph>
        і описує перехідний процес у системі, викликаний даним збуренням.
      </ChapterParagraph>
      <ChapterParagraph>
        САУ буде стійкою, якщо перехідні процеси, викликані будь-якими
        збуреннями, будуть загасаючими, тобто якщо із часом yn(t) = y вільн (t)
        буде прямувати до нуля.
      </ChapterParagraph>
      <ChapterParagraph>
        Як відомо, розв&apos;язок однорідного диференціального рівняння має
        вигляд: yn(t) = Sum (n, i) Ci*e^(si*t), де Ci - постійні інтегрування,
        що визначаються початковими умовами і збуренням; si - корінь
        характеристичного рівняння
      </ChapterParagraph>
      <TaskImage src={img69} width="600px" />
      <ChapterParagraph>
        Зауваження 5.1. Багаточлен D(s) є знаменником передавальної функції
        замкненої системи.
      </ChapterParagraph>
      <ChapterParagraph>
        {`Щоб система була стійкою розв'язок (9.3) повинен задовольняти умові lim(t -> ∞) yn(t) = lim(t -> ∞) Sum (n, i) Ci*e^(si*t) = 0.`}
      </ChapterParagraph>
      <ChapterParagraph>
        З виразу (9.2) видно, що спадання y(t), тобто стійкість системи,
        залежить від значень коренів характеристичного рівняння s1, s2 ... sn.
      </ChapterParagraph>
      <ChapterParagraph>
        З&apos;ясуємо, які властивості коренів необхідні й достатні для того,
        щоб система була стійкою. Корені можуть бути дійсними, комплексними та
        уявними.
      </ChapterParagraph>
      <ChapterParagraph>
        На рис. 9.3 представлені графіки перехідних процесів для різних типів
        коренів, причому, з додатними і від’ємним дійсними частинами.
      </ChapterParagraph>
      <TaskImage src={img70} width="600px" />
      <ChapterParagraph>
        Як видно з малюнку, для згасання перехідного процесу необхідно, щоб
        дійсні частини коренів характеристичного рівняння були від’ємними. Якщо
        представити корені характеристичного рівняння у вигляді точок на
        комплексній площині, то для стійкої системи необхідно й достатньо, щоб
        корені знаходилися в лівій напівплощині коренів , тобто ліворуч від
        уявної осі.
      </ChapterParagraph>
      <ChapterParagraph>
        Система перебуває на границі стійкості при наявності:
        <ol>
          <li>Нульового кореня;</li>
          <li>Пари уявних коренів;</li>
          <li>Нескінченного кореня.</li>
        </ol>
      </ChapterParagraph>
      <ChapterParagraph>
        Таким чином, для стійкої системи необхідно й досить, щоб дійсні частини
        коренів характеристичного рівняння лежали в лівій частині комплексної
        площини, тобто були від’ємними. Наявність кореня на уявній осі означає,
        що система знаходиться на границі стійкості.
      </ChapterParagraph>
    </CoursePageWrapper>
  );
}

export default Chapter4_2;
