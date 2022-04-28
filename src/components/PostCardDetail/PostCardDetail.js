import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';

import DetailLike from '../../assets/Image/DetailLike.svg';
import DetailUnlike from '../../assets/Image/DetailUnlike.svg';
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
import { useEffect } from 'react';

const PostCardDetail = (props) => {
  const dispatch = useDispatch();
  const liked_list = useSelector((state) => state.post.liked_list);

  const [is_liked, setIsLiked] = useState(false);

  const clickLike = () => {
    setIsLiked(!is_liked);
    if (is_liked) {
      dispatch(postActions.likePostDB(props.pk, 'unlike'));
    } else {
      dispatch(postActions.likePostDB(props.pk, 'like'));
    }
  };

  useEffect(() => {
    setIsLiked(liked_list.includes(props.pk));
  }, [props.pk]);

  return (
    <CardDetailWrap>
      <CardDetailHeader>
        <Avatar user_profile={props.writerProfileUrl} />
        <HeaderRight>
          <UserName>{props.writerNickName}</UserName>
          <CardDetailInfo>
            {props.categoryName} · {dayjs(props.writtenAt).format('YY-MM-DD')}
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
        <CountWrap type="like" isLiked={is_liked} onClick={clickLike}>
          <FooterIcon src={!is_liked ? DetailLike : DetailUnlike} />
          <FooterCount isLiked={is_liked}>{props.likeCount}</FooterCount>
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
