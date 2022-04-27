import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { history } from '../../redux/configStore';

import { actionCreators as postActions } from '../../redux/modules/post';
import Arrow from '../../assets/Image/Arrow.svg';
import { PostCardDetail } from '../../components';
import {
  HeaderButton,
  HeaderText,
  PostDetailHeader,
  PostDetailWrap,
  ButtonImg,
} from './style';

const PostDetail = () => {
  const dispatch = useDispatch();
  const post_pk = useParams();

  const post_data = useSelector((state) => state.post.post_one);

  useEffect(() => {
    dispatch(postActions.getPostOneDB(post_pk.post_pk));

    return () => {
      dispatch(postActions.initPostOne());
    };
  }, []);

  return (
    <PostDetailWrap>
      <PostDetailHeader>
        <HeaderButton
          onClick={() => {
            history.push('/community/list');
          }}
        >
          <ButtonImg src={Arrow} alt="back_to_list" />
        </HeaderButton>
        <HeaderText>글 목록으로</HeaderText>
      </PostDetailHeader>
      {post_data && <PostCardDetail {...post_data} />}
    </PostDetailWrap>
  );
};

export default PostDetail;
