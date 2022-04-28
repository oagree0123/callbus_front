import React, { useState, useRef } from 'react';
import { history } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';

import Arrow from '../../assets/Image/Arrow.svg';
import SelectArrow from '../../assets/Image/SelectArrow.svg';
import UploadIcon from '../../assets/Image/UploadIcon.svg';
import CloseIcon from '../../assets/Image/CloseIcon.svg';
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
  ImageUploadWrap,
  ImageSlider,
  ImageBox,
  UploadButton,
  UploadBtnIcon,
  UploadBtnText,
  UploadInput,
  UploadImg,
  UploadCloseBtn,
} from './style';
import { useEffect } from 'react';

const PostWriteForm = () => {
  const dispatch = useDispatch();
  const select_list = ['대선청원', '자유글', '질문/답변', '뉴스', '노하우'];

  const scrollRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const [select_key, setSelectKey] = useState(1);
  const [select_value, setSelectValue] = useState('질문/답변');

  const [title, setTitle] = useState('');
  const [check_title, setCheckTitle] = useState(false);
  const [contText, setContText] = useState('');
  const [check_ContText, setCheckContText] = useState(false);

  const [imgs_url, setImgsUrl] = useState([]);

  const [active_write, setActiveWrite] = useState(false);

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

  const changeSelect = (e) => {
    let category_key = select_list.findIndex((l) => {
      return l === e.target.value;
    });

    setSelectValue(e.target.value);
    setSelectKey(category_key + 1);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);

    console.log(e.target.value !== '');

    if (e.target.value !== '') {
      setCheckTitle(true);
    } else {
      setCheckTitle(false);
    }
  };

  const changeContText = (e) => {
    setContText(e.target.value);

    console.log(e.target.value !== '');

    if (e.target.value !== '') {
      setCheckContText(true);
    } else {
      setCheckContText(false);
    }
  };

  const closeImage = (img_file) => {
    let _imgs_url = imgs_url.filter((u) => {
      return u !== img_file;
    });

    setImgsUrl([..._imgs_url]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!active_write) {
      window.alert('제목과 내용을 모두 입력해야합니다');
      return;
    }
    let now_date = new Date().toISOString();

    dispatch(
      postActions.addPostDB(
        select_key,
        select_value,
        title,
        contText,
        now_date,
        imgs_url,
      ),
    );
  };

  useEffect(() => {
    if (check_title && check_ContText) {
      setActiveWrite(true);
    } else {
      setActiveWrite(false);
    }
  }, [check_title, check_ContText]);

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
          <WriteButton
            type="submit"
            disabled={!active_write}
            active_write={active_write}
          >
            완료
          </WriteButton>
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
        <ImageUploadWrap>
          <ImageSlider
            ref={scrollRef}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
          >
            {imgs_url.length === 0 ? (
              <ImageBox />
            ) : (
              imgs_url.map((m, i) => {
                const img_url = URL.createObjectURL(m);
                return (
                  <ImageBox key={i}>
                    <UploadImg src={img_url} alt="upload_image" />
                    <UploadCloseBtn
                      type="button"
                      bg={CloseIcon}
                      onClick={() => {
                        closeImage(m);
                      }}
                    />
                  </ImageBox>
                );
              })
            )}
          </ImageSlider>
          <UploadButton>
            <UploadInput
              type="file"
              multiple="multiple"
              accept="image/*"
              onChange={(e) => {
                if (imgs_url.length + e.target.files.length > 6) {
                  window.alert('이미지는 6개 까지만 업로드 가능합니다.');
                  return;
                }

                setImgsUrl([...imgs_url, ...e.target.files]);
              }}
            />
            <UploadBtnIcon src={UploadIcon} alert="upload_icon" />
            <UploadBtnText>사진({imgs_url.length}/6)</UploadBtnText>
          </UploadButton>
        </ImageUploadWrap>
      </WriteFrom>
    </PostWriteFormWrap>
  );
};

export default PostWriteForm;
