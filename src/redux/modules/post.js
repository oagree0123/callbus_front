import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

// actions
const GET_POSTS = 'GET_POSTS';
const GET_POST_ONE = 'GET_POST_ONE';
const ADD_POST = 'ADD_POST';
const INIT_POST_ONE = 'INIT_POST_ONE';

// action creators
const getPosts = createAction(GET_POSTS, (post_list) => ({ post_list }));
const getPostOne = createAction(GET_POST_ONE, (post_data) => ({ post_data }));
const addPost = createAction(ADD_POST, (post_data) => ({ post_data }));
const initPostOne = createAction(INIT_POST_ONE, () => ({}));

// initialState
const initialState = {
  list: [],
  post_one: {},
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

const addPostDB = (category_key, category_name, title, content, now_date) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.post(`http://localhost:3001/posts`, {
        categoryPk: category_key,
        categoryName: category_name,
        title: title,
        content: content,
        viewCount: 0,
        likeCount: 0,
        commentCount: 0,
        imageUrl: null,
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
  getPostOneDB,
  addPostDB,
  initPostOne,
};

export { actionCreators };
