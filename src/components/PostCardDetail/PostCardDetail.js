import React from 'react';
import { useSelector } from 'react-redux';

import DetailLike from '../../assets/Image/DetailLike.svg';
import DetailComment from '../../assets/Image/DetailComment.svg';

import Avatar from '../Avatar/Avatar';
import {
  HeaderRight,
  CardDetailMain,
  CardDetailHeader,
  CardDetailInfo,
  CardDetailWrap,
  UserName,
  CardDetailTitle,
  CardDetailCont,
  CardDetailImg,
  CardDetailFooter,
  FooterIcon,
  FooterCount,
  CountWrap,
  DetailImgWrap,
} from './style';

const PostCardDetail = (props) => {
  return (
    <CardDetailWrap>
      <CardDetailHeader>
        <Avatar user_profile={props.writerProfileUrl} />
        <HeaderRight>
          <UserName>{props.writerNickName}</UserName>
          <CardDetailInfo>{props.categoryName} ·</CardDetailInfo>
        </HeaderRight>
      </CardDetailHeader>
      <CardDetailMain>
        <CardDetailTitle>{props.title}</CardDetailTitle>
        <CardDetailCont>{props.content}</CardDetailCont>
        <DetailImgWrap>
          {props.imageUrl &&
            (!Array.isArray(props.imageUrl) ? (
              <CardDetailImg src={props.imageUrl} alt="detail_image" />
            ) : (
              props.imageUrl.map((u, i) => {
                return <CardDetailImg src={u} alt="detail_image" />;
              })
            ))}
        </DetailImgWrap>
      </CardDetailMain>
      <CardDetailFooter>
        <CountWrap>
          <FooterIcon src={DetailLike} />
          <FooterCount>{props.likeCount}</FooterCount>
        </CountWrap>
        <CountWrap>
          <FooterIcon src={DetailComment} />
          <FooterCount>{props.commentCount}</FooterCount>
        </CountWrap>
      </CardDetailFooter>
    </CardDetailWrap>
  );
};

export default PostCardDetail;
