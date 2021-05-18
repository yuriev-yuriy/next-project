import React from 'react';
import { useRouter } from 'next/router';
// import s from './Navbar.module.scss';
import styled from 'styled-components';

const menuItems = [
  { text: 'Main', href: '/' },
  // { text: 'Posts', href: '/posts' },
  {text: 'Create post', href: '/posts/new'},
]

const Wrapper = styled.section`
  padding: 4em;
  background: blue;
  padding: 0;
   display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  background-color: transparent;
`;

const Navbar = () => {
  const router = useRouter();
  return (
    <Wrapper>
      {menuItems.map(({text, href}) => (
      <Button  key={href} onClick={()=> router.push(href)}>{text}</Button>
      ))}
      </Wrapper>

  )
}

export default Navbar;
