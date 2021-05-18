import React from 'react'; 
import styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { useRouter } from 'next/router';
import PostList from '../components/PostList';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { NextThunkDispatch, wrapper } from '../store';
import { fetchPosts } from '../store/action-creators/post';
import { IPost } from '../types/post';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: blue;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: white;
  padding: 0;
   display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: blue;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border: none;
  color: white;
  margin-right: 140px;
`
interface PostListProps {
  posts: IPost[]
}

const Main = () => {
  const router = useRouter();
  const { posts, error} = useTypedSelector(state => state.posts);

  if (error) {
    <MainLayout>
      <Title>{error}</Title>
      </MainLayout>
  }

  return (
    <MainLayout>
      <Title>
        Posts
      </Title>
     <Wrapper>
        <Button onClick={() => router.push('posts/new')}>Add new post</Button>
      </Wrapper>
      <PostList posts={posts}/>
    </MainLayout>
  );
};

export default Main;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchPosts())
})