import axios, { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'react';
import {PostAction, PostActionTypes} from '../../types/post';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const res = await axios.get('https://simple-blog-api.crew.red/posts')
      dispatch({type: PostActionTypes.FETCH_POSTS, payload: res.data
      })
    } catch (error) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'something go wrong, please try again later'
      })
    }
  }
}

export const sendPost = (title: string, body: string) => {
  const post = {title, body}
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const res = await axios.post('https://simple-blog-api.crew.red/posts', post)
      dispatch({type: PostActionTypes.SENDING_POST, payload: res.data
      })
    } catch (error) {
      console.log(error.message)
      }
    }
}
  
export const deletePost = (id: AxiosRequestConfig) => {
  console.log(id)
  // const post = {title, body}
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const res = await axios.delete('https://simple-blog-api.crew.red/posts', id)
      dispatch({type: PostActionTypes.DELETE_POST, payload: id
      })
    } catch (error) {
      console.log(error.message)
      }
    }
  }
