import React, { useState } from 'react';
import { history } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';

import Arrow from '../../assets/Image/Arrow.svg';
import SelectArrow from '../../assets/Image/SelectArrow.svg';
import {
  ButtonImg,
  HeaderButton,
  PostWriteHeader,
  PostWriteTitle,
  WriteButton,
  CategoryOption,
  CategorySelect,
  ContTextarea,
  PostWriteFormWrap,
  SelectWrap,
  TitleInput,
  WriteWrap,
  WriteFrom,
} from './style';

const PostWriteForm = () => {
  const dispatch = useDispatch();
  const select_list = ['대선청원', '자유글', '질문/답변', '뉴스', '노하우'];

  const [select_key, setSelectKey] = useState(1);
  const [select_value, setSelectValue] = useState('질문/답변');
  const [title, setTitle] = useState('');
  const [contText, setContText] = useState('');

  const changeSelect = (e) => {
    let category_key = select_list.findIndex((l) => {
      return l === e.target.value;
    });

    setSelectValue(e.target.value);
    setSelectKey(category_key + 1);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContText = (e) => {
    setContText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let now_date = new Date().toISOString();

    dispatch(
      postActions.addPostDB(
        select_key,
        select_value,
        title,
        contText,
        now_date,
      ),
    );
  };

  return (
    <PostWriteFormWrap>
      <WriteFrom onSubmit={submitHandler}>
        <PostWriteHeader>
          <HeaderButton
            onClick={() => {
              history.push('/community/list');
            }}
          >
            <ButtonImg src={Arrow} alt="back_to_list" />
          </HeaderButton>
          <PostWriteTitle>글쓰기</PostWriteTitle>
          <WriteButton type="submit">완료</WriteButton>
        </PostWriteHeader>
        <SelectWrap>
          <CategorySelect
            arrow_img={SelectArrow}
            onChange={changeSelect}
            value={select_value}
          >
            {select_list.map((s) => {
              return (
                <CategoryOption value={s} key={s}>
                  {s}
                </CategoryOption>
              );
            })}
          </CategorySelect>
        </SelectWrap>
        <WriteWrap>
          <TitleInput
            placeholder="제목을 작성해주세요"
            value={title}
            onChange={changeTitle}
          />
          <ContTextarea
            placeholder={`내용을 작성해주세요.\n\n◎ 사진 및 외부 콘텐츠 첨부시 영향력 상승!\n◎ 뉴스, 블로그 등 외부 콘텐츠는 https:// 링크를 붙여 넣으세요. 본문에 썸네일로 표시됩니다.\n◎ 광고글 금지. 서비스 이용이 제한됩니다.`}
            value={contText}
            onChange={changeContText}
          />
        </WriteWrap>
      </WriteFrom>
    </PostWriteFormWrap>
  );
};

export default PostWriteForm;
