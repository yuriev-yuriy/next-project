import { PostState, PostAction, PostActionTypes } from '../../types/post';

const defaultState: PostState = {
  posts: [],
  error: '',
}

export const postReduser = (state = defaultState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state, error: '', posts: action.payload }
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, error: action.payload }
    case PostActionTypes.SENDING_POST:
      return { posts: action.payload, ...state }
    case PostActionTypes.DELETE_POST:
      return { ...state }
    default:
      return state;
  }
  return 
}