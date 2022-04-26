import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../PostCard/PostCard';

const PostCardList = () => {
  const post_list = useSelector((state) => state.post.list);

  return (
    <>
      {post_list.map((p) => {
        return <PostCard key={p.pk} {...p} />;
      })}
    </>
  );
};

export default PostCardList;
