import React from 'react'; 
import styled from 'styled-components';
// import { IPost } from '../types/post';
import Link from "next/Link";

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

// interface PostItemProps {
//   post: IPost[];
// }

const PostItem = ({ post: {id, title, body} }) => {

  return (
    title && <Link href={`./posts/${id}`}>
     <Wrapper>
      <Title>{title}</Title>
      <p>{body}</p>
    </Wrapper>
        </Link>
  );
};

export default PostItem;