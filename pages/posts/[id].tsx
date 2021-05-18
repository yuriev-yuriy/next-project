import React, { useState } from 'react'; 
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { IPost } from '../../types/post';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Wrapper = styled.section`
  padding: 4em;
  background: white;
  padding: 10px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: blue;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px
`
const PostPage = ({singlePost}) => {
  const [post, setPost] = useState<IPost>(singlePost);
  const [comment, setComment] = useState('');

  const sendComment = (e) => {
    setComment(e.target.value)
  }

  const addComment = async () => {
        try {
          const response = await axios.post('https://simple-blog-api.crew.red/comments', {
              postId: post.id,
            body: comment
            })
          setPost({ ...post, comments: [...post.comments, response.data] });
          resetInput();
        } catch (e) {
            console.log(e)
    }
  }
  
  const resetInput = () => {
    setComment('')
  }

  return (
    <MainLayout>
      <Wrapper>
      <Title>Title - {post.title}</Title>
      <p>Post - {post.body}</p>
        <hr />
        </Wrapper>
      <Wrapper>
        <Title>Comments</Title>
        <textarea
          style={{width: '90%', resize: "none"}}
          onChange={sendComment}
          value = {comment}
          rows={5}
          placeholder="leave comment" />
      </Wrapper>
      <Button onClick={addComment}>Comment</Button>
      <Wrapper>
        {post.comments.map(comment =>
          <ul key={comment.id}>
            <li style={{listStyle: 'none'}}>{comment.body}</li>
            </ul>
        )}
        </Wrapper>
    </MainLayout>

  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${params.id}?_embed=comments`)
    return {
        props: {
            singlePost: response.data
        }
  }
}

