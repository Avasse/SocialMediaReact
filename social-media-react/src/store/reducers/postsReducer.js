import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function postsReducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts
      };

    case types.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}