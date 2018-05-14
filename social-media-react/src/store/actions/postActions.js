import * as types from '../constants/actionTypes';

export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return fetch("http://localhost:3000/posts")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPostsSuccess(json.posts));
        return json.posts;
      })
      .catch(error => dispatch(fetchPostsError(error)));
  };
}

export const fetchPostsBegin = () => ({
  type: types.FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsError = error => ({
  type: types.FETCH_POSTS_ERROR,
  payload: { error }
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}