import React, { useState } from 'react'; 
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { sendPost } from '../../store/action-creators/post';
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

const New = () => {
  const [title, setTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  
  const changeInputTitle = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setTitle(e.currentTarget.value);
  }

  const changeTextBody = (e: { currentTarget: { value: React.SetStateAction<string> } }) => {
    setPostBody(e.currentTarget.value);
  }

  const makePost = () => {
    dispatch(sendPost(title, postBody));
    toPosts();
  }

  const toPosts = () => {
    router.push('../')
  }
  return (
    <MainLayout>
      <Title>
        Add New Post
    </Title>
      <Wrapper>
        <input
           style={{width: '90%'}}
          onChange={changeInputTitle}
        type='text'
        placeholder="post title"
        />
        </Wrapper>
        <Wrapper>
        <textarea
           style={{width: '90%', resize: "none"}}
          onChange={changeTextBody}
        placeholder="post description"
        rows={5}
      />
      </Wrapper>
      <Button onClick={makePost}>Add Post</Button>
    </MainLayout>
  );
};

export default New;