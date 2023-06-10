import React from 'react';
import CoursePageWrapper from '../../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../../components/coursePageElements/courseText/chapterTitle';
import ChapterParagraph from '../../../../../components/coursePageElements/courseText/chapterParagraph';

import img15 from '../../../../../../../assets/images/15.png'
import img16 from '../../../../../../../assets/images/16.png'
import img17 from '../../../../../../../assets/images/17.png'
import img18 from '../../../../../../../assets/images/18.png'
import img19 from '../../../../../../../assets/images/19.png'
import TaskImage from '../../../../../components/taskPageElements/taskImage';

const Chapter2_3 = () => {
  return (
    <CoursePageWrapper>
      <ChapterTitle>Перетворення Лапласа. Передавальна функція.</ChapterTitle>
      <ChapterParagraph>
        Як відомо, шляхом введення комплексних зображень можна замінити
        тригонометричні перетворення синусоїдальних функцій простими
        алгебраїчними операціями з комплексними числами.
      </ChapterParagraph>
      <ChapterParagraph>
        На використанні поняття зображення функції заснований операційний метод.
        Ідея методу полягає в тому, що функція дійсної змінної f(t) однозначно
        зображується відповідною функцією F(s) комплексної змінної s = c + jw.
      </ChapterParagraph>
      <ChapterParagraph>
        Завдяки цьому складні перетворення, пов'язані з диференціюванням
        та інтегруванням функції дійсної змінної заміняються алгебраїчними
        операціями з функціями комплексної змінної відповідно до формули.
        Функція F(s), обумовлена цим виразом називається прямим перетворенням
        Лапласа або зображенням функції.
      </ChapterParagraph>
      <TaskImage src={img15} width={"800px"}/>
      <ChapterParagraph>
        Зворотне перетворення Лапласа має вигляд
      </ChapterParagraph>
      <TaskImage src={img16} width={"800px"}/>
      <ChapterParagraph>
        При розв'язанні більшості практичних задач користуються таблицями перетворень Лапласа, отриманими на підставі виразів (3.7).
        Деякі важливі перетворення Лапласа:
      </ChapterParagraph>
      <TaskImage src={img17} width={"800px"}/>
      <ChapterParagraph>
        Розглянемо порядок застосування операційного методу для розв'язання
        диференціального рівняння (3.5) при нульових початкових умовах.
        Застосовуючи перетворення Лапласа до кожного члена рівняння,
        одержимо рівняння в операційній формі:
      </ChapterParagraph>
      <ChapterParagraph>
        TsY(s)+Y(s)=kX(s)
      </ChapterParagraph>
      <ChapterParagraph>
        Це рівняння є алгебраїчним, і може бути знайдене зображення розв'язку
        (вихідної величини), що при нульових початкових умовах має вигляд:
      </ChapterParagraph>
      <TaskImage src={img18} width={"800px"}/>
      <ChapterParagraph>
        При заданій вхідній величині за зображенням Y(s) за допомогою таблиць
        або формул зворотного перетворення Лапласа визначають оригінал y(t), що
        є розв'язком диференціального рівняння.
        Вираз (3.9) дає можливість ввести основне поняття теорії автоматичного
        управління, а саме, поняття передавальної функції W(s).
      </ChapterParagraph>
      <ChapterParagraph>
        Відношення зображення вихідної величини до зображення вхідної
        величини при нульових початкових умовах називається передавальною функцією:
      </ChapterParagraph>
      <TaskImage src={img19} width={"800px"}/>
    </CoursePageWrapper>
  );
};

export default Chapter2_3;
