import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  border-radius: 3px;
  padding: 6px;
  border: none;
  color: white;
`

interface AddPostProps {

}


const AddPost: React.FC<AddPostProps> = ({children}) => {
  return (
    <div>
      <input
        type='text'
        placeholder="post title"
      />
      <textarea
        placeholder="post description"
        rows={5}
      />
      <Button>Add Post</Button>
    </div>
  )
}

export default AddPost;