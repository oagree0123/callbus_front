import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';

import { PostCard, PostCardList } from '../../components';
import { HomeTitle, HomeWrap } from './style';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPostsDB());
  }, []);

  return (
    <HomeWrap>
      <HomeTitle>커뮤니티</HomeTitle>
      <PostCardList />
    </HomeWrap>
  );
};

export default Home;
