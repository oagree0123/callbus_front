import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { history } from '../../redux/configStore';

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

const PostCard = (props) => {
  const now_date = dayjs();
  const written_date = dayjs(props.writtenAt.split('T').join(' '));
  const diff_date = now_date.diff(written_date, 's');

  const [post_date, setPostDate] = useState('');

  useEffect(() => {
    if (diff_date < 60) {
      setPostDate('방금전');
    } else if (diff_date < 3600 && diff_date >= 60) {
      let _diff = Math.floor(diff_date / 60);
      setPostDate(`${_diff}분전`);
    } else if (diff_date < 86400 && diff_date >= 3600) {
      let _diff = Math.floor(diff_date / 3600);
      setPostDate(`${_diff}시간 전`);
    } else {
      setPostDate(written_date.format('YY-MM-DD'));
    }
  }, []);

  return (
    <PostCardWrap
      onClick={(e) => {
        history.push(`/community/post/${props.pk}`);
      }}
    >
      <PostCardHeader>
        <Avatar user_profile={props.writerProfileUrl} />
        <HeaderRight>
          <UserName>{props.writerNickName}</UserName>
          <PostCardInfo>
            {props.categoryName} · {post_date}
          </PostCardInfo>
        </HeaderRight>
      </PostCardHeader>
      <PostCardMain>
        <PostCardTitle>{props.title}</PostCardTitle>
        <PostCardCont>{props.content}</PostCardCont>
        {props.imageUrl &&
          (!Array.isArray(props.imageUrl) ? (
            <PostCardImg img_url={props.imageUrl} />
          ) : (
            <PostCardImg img_url={props.imageUrl[0]} />
          ))}
      </PostCardMain>
      <PostCardFooter>
        <CountWrap>
          <FooterIcon src={ViewIcon} />
          <FooterCount>{props.viewCount}</FooterCount>
        </CountWrap>
        <CountWrap>
          <FooterIcon src={LikeIcon} />
          <FooterCount>{props.likeCount}</FooterCount>
        </CountWrap>
        <CountWrap>
          <FooterIcon src={CommentIcon} />
          <FooterCount>{props.commentCount}</FooterCount>
        </CountWrap>
      </PostCardFooter>
    </PostCardWrap>
  );
};

export default PostCard;
