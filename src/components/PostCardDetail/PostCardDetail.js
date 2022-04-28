import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

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
  const post_date = dayjs(props.writtenAt).format('YY-MM-DD');

  return (
    <CardDetailWrap>
      <CardDetailHeader>
        <Avatar user_profile={props.writerProfileUrl} />
        <HeaderRight>
          <UserName>{props.writerNickName}</UserName>
          <CardDetailInfo>
            {props.categoryName} · {post_date}
          </CardDetailInfo>
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
                return <CardDetailImg src={u} alt="detail_image" key={i} />;
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
