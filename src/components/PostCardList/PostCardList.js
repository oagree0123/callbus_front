import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../PostCard/PostCard';
import { PostCardListWrap } from './style';

const PostCardList = () => {
  const post_list = useSelector((state) => state.post.list);

  return (
    <PostCardListWrap>
      {post_list.map((p) => {
        return <PostCard key={p.pk} {...p} />;
      })}
    </PostCardListWrap>
  );
};

export default PostCardList;
