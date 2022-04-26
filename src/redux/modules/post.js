import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

// actions
const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD_POST';

// action creators
const getPosts = createAction(GET_POSTS, post_list => ({ post_list }));
const addPost = createAction(ADD_POST, () => ({}));

// initialState
const initialState = {
  list: [],
};

// middleware
const getPostsDB = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.get(`http://localhost:3001/posts`);

      dispatch(getPosts(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

// reducer
export default handleActions(
  {
    [GET_POSTS]: (state, action) =>
      produce(state, draft => {
        draft.list.push(...action.payload.post_list);

        let _new_list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex(a => a.pk === cur.pk) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex(a => a.pk === cur.pk)] = cur;
            return acc;
          }
        }, []);

        draft.list = _new_list;
      }),
    [ADD_POST]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

// action creator export
const actionCreators = {
  getPostsDB,
};

export { actionCreators };
