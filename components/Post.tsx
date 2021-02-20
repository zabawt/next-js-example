import React from 'react';
import { Post } from '../interfaces/post';
import styled from 'styled-components';

const StyledPost = styled.div`
  padding: 12px;
  border-radius: 6px;
  margin: 12px 6px;
  box-shadow: 0px 1px 2.5px -1px rgba(0,0,0,0.3);
  border: 1px solid rgba(0,0,0,0.1);
  font-family: 'Roboto', sans-serif;
  flex: 1;
  min-width: 300px;
`;

const StyledTitle = styled.h3`
  min-height: 2rem;
  line-height: 1rem;
`;

export const PostView: React.FC<Post> = (props:Post) => {
  return (
    <StyledPost>
      <StyledTitle>{props.title}</StyledTitle>
      <p>{props.body}</p>
    </StyledPost>
  );
};
