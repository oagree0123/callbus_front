import React from 'react';
import { PostCard } from '../../components';

import { HomeTitle, HomeWrap } from './style';

const Home = () => {
  return (
    <HomeWrap>
      <HomeTitle>커뮤니티</HomeTitle>
      <PostCard />
      <PostCard />
      <PostCard />
    </HomeWrap>
  );
};

export default Home;
