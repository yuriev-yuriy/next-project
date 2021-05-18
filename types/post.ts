export interface IComment {
  postId: number;
  body: string;
  id: number;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  comments?: IComment[];
}

export interface PostState {
  posts: IPost[];
  error: string;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  SENDING_POST = "SEND_POST",
  DELETE_POST = "SEND_POST",
}

interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS,
  payload: IPost[],
}

interface FetchPostsError {
  type: PostActionTypes.FETCH_POSTS_ERROR,
  payload: string,
}

interface SendPostAction {
  type: PostActionTypes.SENDING_POST,
  payload: IPost[],
}

interface DeletePostAction {
  type: PostActionTypes.DELETE_POST,
  payload: {},
}

export type PostAction = FetchPostsAction | FetchPostsError | SendPostAction | DeletePostAction;