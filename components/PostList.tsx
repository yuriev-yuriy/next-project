import React, {FC} from 'react'; 
import styled from 'styled-components';
import { IPost } from '../types/post';
import PostItem from './PostItem';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`
interface PostListProps {
  posts: IPost[],
}




const PostList: FC<PostListProps> = ({ posts }) => {

  return (
      <>
      {posts.map(post =>
        <PostItem
          key={post.id}
          post={post}
        />
      )}
    </>

  );
};

export default PostList;