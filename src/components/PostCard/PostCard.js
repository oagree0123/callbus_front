import React from 'react';

import ViewIcon from '../../assets/Image/ViewIcon.svg';
import LikeIcon from '../../assets/Image/LikeIcon.svg';
import CommentIcon from '../../assets/Image/CommentIcon.svg';

import Avatar from '../Avatar/Avatar';
import {
  HeaderRight,
  PostCardMain,
  PostCardHeader,
  PostCardInfo,
  PostCardWrap,
  UserName,
  PostCardTitle,
  PostCardCont,
  PostCardImg,
  PostCardFooter,
  FooterIcon,
  FooterCount,
  CountWrap,
} from './style';

const PostCard = () => {
  return (
    <PostCardWrap>
      <PostCardHeader>
        <Avatar />
        <HeaderRight>
          <UserName>호랑이냥</UserName>
          <PostCardInfo>자유글 · 1분전</PostCardInfo>
        </HeaderRight>
      </PostCardHeader>
      <PostCardMain>
        <PostCardTitle>
          별을 다하지 애기 듯합니다. 아스라히 지나가는 하늘에는 봅니다.
        </PostCardTitle>
        <PostCardCont>
          별을 다하지 애기 듯합니다. 아스라히 지나가는 하늘에는 봅니다. 노새,
          소녀들의 속의 봅니다. 계집애들의 언덕 내 덮어 차 버리었습니다. 풀이
          계집애들의 우는 하나의 헤일 않은 이 별 가득 있습니다. 별을 새워 남은
          까닭입니다. 지나가는 자랑처럼 아이들의 하나에 있습니다. 언덕 라이너 된
          까닭입니다. 별 별 같이 나의 우는 계십니다. 무엇인지 별들을 봄이 어머니
          있습니다. 밤을 겨울이 책상을 새워 계십니다. 나는 별 시와 쉬이
          있습니다. 라이너 별을 덮어 거외다. 때 된 언덕 아스라히 나의 이름과,
          지나고 까닭입니다. 가득 이름자 어머님, 마디씩 밤을 아침이 책상을
          그리고 있습니다. 흙으로 내 때 이국 이름을 잠, 잔디가 까닭입니다. 이
          비둘기, 언덕 이네들은 별 아름다운 별을 위에도 하늘에는 봅니다. 내
          라이너 겨울이 이국 오는 된 프랑시스 위에 까닭입니다. 이국 같이 강아지,
          동경과 그리고 풀이 북간도에 이런 옥 봅니다.계집애들의 노루, 슬퍼하는
          아이들의 딴은 차 무덤 나의 버리었습니다. 강아지, 쓸쓸함과 잔디가
          별빛이 까닭입니다. 지나가는 비둘기, 하나 딴은 불러 거외다. 하나에
          이름을 쉬이 거외다. 패, 추억과 가슴속에 묻힌 무덤 밤이 까닭이요,
          이름과, 봅니다. 오면 하나에 가을 잠, 경, 봅니다. 않은 별이 하나에
          이름과, 어머니, 했던 노새, 까닭입니다. 하나에 다하지 마디씩 파란 내
          듯합니다. 릴케 북간도에 하나에 이런 하나에 까닭입니다. 옥 북간도에
          흙으로 하나에 하나에 버리었습니다.
        </PostCardCont>
        <PostCardImg />
      </PostCardMain>
      <PostCardFooter>
        <CountWrap>
          <FooterIcon src={ViewIcon} />
          <FooterCount>100</FooterCount>
        </CountWrap>
        <CountWrap>
          <FooterIcon src={LikeIcon} />
          <FooterCount>100</FooterCount>
        </CountWrap>
        <CountWrap>
          <FooterIcon src={CommentIcon} />
          <FooterCount>100</FooterCount>
        </CountWrap>
      </PostCardFooter>
    </PostCardWrap>
  );
};

export default PostCard;
