import React, { useRef, useState } from 'react';
import { CategoryItem, CategoryList, SliderWrap } from './style';

const CategorySlider = () => {
  const category_data = [
    '전체',
    '인기글',
    '대선청원',
    '자유글',
    '질문/답변',
    '뉴스',
    '노하우',
  ];

  const scrollRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [is_clicked, setIsClicked] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const clickedItem = (idx) => {
    const new_arr = Array(category_data.length).fill(false);
    new_arr[idx] = true;
    setIsClicked(new_arr);
  };

  return (
    <SliderWrap>
      <CategoryList
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {category_data.map((c, i) => {
          return (
            <CategoryItem
              key={i}
              onClick={() => {
                clickedItem(i);
              }}
              isClicked={is_clicked[i]}
            >
              {c}
            </CategoryItem>
          );
        })}
      </CategoryList>
    </SliderWrap>
  );
};

export default CategorySlider;
