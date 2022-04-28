import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

// actions
const GET_POSTS = 'GET_POSTS';
const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
const ADD_VIEW_COUNT = 'ADD_VIEW_COUNT';
const GET_POST_ONE = 'GET_POST_ONE';
const LIKE_POST = 'LIKE_POST';
const ADD_POST = 'ADD_POST';
const INIT_POST_ONE = 'INIT_POST_ONE';

// action creators
const getPosts = createAction(GET_POSTS, (post_list) => ({ post_list }));
const getCategoryPosts = createAction(
  GET_CATEGORY_POSTS,
  (post_list, category) => ({
    post_list,
    category,
  }),
);
const addViewCount = createAction(ADD_VIEW_COUNT, (post_idx) => ({
  post_idx,
}));
const likePost = createAction(LIKE_POST, (post_pk, type) => ({
  post_pk,
  type,
}));
const getPostOne = createAction(GET_POST_ONE, (post_data) => ({ post_data }));
const addPost = createAction(ADD_POST, (post_data) => ({ post_data }));
const initPostOne = createAction(INIT_POST_ONE, () => ({}));

// initialState
const initialState = {
  list: [],
  post_one: {},
  liked_list: [],
};

// middleware
const getPostsDB = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.get(
        `http://localhost:3001/posts?_sort=writtenAt&_order=desc`,
      );

      dispatch(getPosts(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const getCategoryPostsDB = (category) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.get(
        `http://localhost:3001/posts?_sort=writtenAt&_order=desc`,
      );

      dispatch(getCategoryPosts(response.data, category));
    } catch (err) {
      console.log(err);
    }
  };
};

const addViewCountDB = (post_pk) => {
  return async function (dispatch, getState, { history }) {
    try {
      let _post_list = getState().post.list;

      const post_idx = _post_list.findIndex((p) => {
        return p.pk === post_pk;
      });

      await axios.patch(`http://localhost:3001/posts/${post_pk}`, {
        viewCount: _post_list[post_idx].viewCount + 1,
      });

      dispatch(addViewCount(post_idx));
    } catch (err) {
      console.log(err);
    }
  };
};

const likePostDB = (post_pk, type) => {
  return async function (dispatch, getState, { history }) {
    try {
      let _post_one = getState().post.post_one;

      if (type === 'like') {
        await axios.patch(`http://localhost:3001/posts/${post_pk}`, {
          likeCount: _post_one.likeCount + 1,
        });
      } else if (type === 'unlike') {
        await axios.patch(`http://localhost:3001/posts/${post_pk}`, {
          likeCount: _post_one.likeCount - 1,
        });
      }

      dispatch(likePost(post_pk, type));
    } catch (err) {
      console.log(err);
    }
  };
};

const getPostOneDB = (post_pk) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.get(
        `http://localhost:3001/posts?pk=${post_pk}`,
      );

      dispatch(getPostOne(response.data[0]));
    } catch (err) {
      console.log(err);
    }
  };
};

const addPostDB = (
  category_key,
  category_name,
  title,
  content,
  now_date,
  imgs_url,
) => {
  return async function (dispatch, getState, { history }) {
    let _imgs_url = [];
    imgs_url.map((u) => {
      _imgs_url.push(URL.createObjectURL(u));
    });

    try {
      const response = await axios.post(`http://localhost:3001/posts`, {
        categoryPk: category_key,
        categoryName: category_name,
        title: title,
        content: content,
        viewCount: 0,
        likeCount: 0,
        commentCount: 0,
        imageUrl: _imgs_url,
        writtenAt: now_date,
        writerNickName: '테스트유저',
        writerProfileUrl:
          'https://static.zaritalk.com/profiles/profile-57-img-fox-39-39%403x.png',
      });

      dispatch(addPost(response.data));
      history.push('/community/list');
    } catch (err) {
      console.log(err);
    }
  };
};

// reducer
export default handleActions(
  {
    [GET_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);

        let _new_list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.pk === cur.pk) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.pk === cur.pk)] = cur;
            return acc;
          }
        }, []);

        draft.list = _new_list;
      }),
    [GET_CATEGORY_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [];
        if (action.payload.category === '인기글') {
          action.payload.post_list.map((p, i) => {
            if (p.viewCount >= 100) {
              draft.list.push(p);
            }
          });
        } else {
          action.payload.post_list.map((p, i) => {
            if (p.categoryName === action.payload.category) {
              draft.list.push(p);
            }
          });
        }
      }),
    [ADD_VIEW_COUNT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_idx].viewCount += 1;
      }),
    [LIKE_POST]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.type === 'like') {
          draft.liked_list.push(action.payload.post_pk);
          draft.post_one.likeCount += 1;
        } else if (action.payload.type === 'unlike') {
          let _liked_list = draft.liked_list.filter((l) => {
            return l !== action.payload.post_pk;
          });
          draft.liked_list = _liked_list;
          draft.post_one.likeCount -= 1;
        }
      }),
    [GET_POST_ONE]: (state, action) =>
      produce(state, (draft) => {
        draft.post_one = { ...action.payload.post_data };
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post_data);
      }),
    [INIT_POST_ONE]: (state, action) =>
      produce(state, (draft) => {
        draft.post_one = {};
      }),
  },
  initialState,
);

// action creator export
const actionCreators = {
  getPostsDB,
  getCategoryPostsDB,
  addViewCountDB,
  getPostOneDB,
  likePostDB,
  addPostDB,
  initPostOne,
};

export { actionCreators };
