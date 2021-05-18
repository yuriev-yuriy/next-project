import React from 'react'; 
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { IPost } from '../types/post';

const Wrapper = styled.section`
  padding: 4em;
  background: white;
  padding: 4px;
  text-align: center;
  cursor: pointer;
  margin: 20px;
  border: 1px solid blue;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

interface PostItemProps {
  post: IPost[];
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const router = useRouter();

  return (
    post.title && <Wrapper onClick={() => { router.push('./posts/' + post.id) }}>
      <Title>{post.title}</Title>
      <p>{post.body}</p>
    </Wrapper>

  );
};

export default PostItem;