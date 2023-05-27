import React, { useContext } from 'react';
import CoursePageWrapper from '../../../../components/coursePageElements/coursePageWrapper';
import ChapterTitle from '../../../../components/coursePageElements/courseText/chapterTitle';
import { Font } from '../../../../App';
import ChapterParagraph from '../../../../components/coursePageElements/courseText/chapterParagraph';
const ChapterOne = () => {
  const fontSize = useContext(Font)
  return (
    <CoursePageWrapper>
      <ChapterTitle font={fontSize}>
        Поняття САУ. Графічне представлення САУ. Типи САУ. Принципи регулювання САУ.
      </ChapterTitle>
      <ChapterParagraph fontSize={fontSize}>
        123123123123
      </ChapterParagraph>
    </CoursePageWrapper>
  );
};

export default ChapterOne;
