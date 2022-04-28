import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { history } from '../../redux/configStore';
import { actionCreators as postActions } from '../../redux/modules/post';

import FingerWrite from '../../assets/Image/FingerWrite.png';
import { CategorySlider, PostCardList } from '../../components';
import {
  ButtonImg,
  ButtonText,
  HomeTitle,
  HomeWrap,
  WriteButton,
} from './style';

const Home = () => {
  const dispatch = useDispatch();

  const saveScroll = () => {
    sessionStorage.setItem('scroll_Y', window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, sessionStorage.getItem('scroll_Y'));
    dispatch(postActions.getPostsDB());
  }, []);

  return (
    <HomeWrap>
      <HomeTitle>커뮤니티</HomeTitle>
      <CategorySlider />
      <PostCardList saveScroll={saveScroll} />
      <WriteButton
        onClick={() => {
          saveScroll();
          history.push('/community/post/new');
        }}
      >
        <ButtonText>글쓰기</ButtonText>
        <ButtonImg src={FingerWrite} alt="button_emoji" />
      </WriteButton>
    </HomeWrap>
  );
};

export default Home;
