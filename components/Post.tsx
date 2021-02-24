import React from 'react';
import { Post } from '../interfaces/post';
import styled from 'styled-components';

const StyledPost = styled.article`
  border-radius: 6px;
  margin: 12px 6px;
  box-shadow: 0px 1px 2.5px -1px rgba(0,0,0,0.3);
  border: 1px solid rgba(0,0,0,0.1);
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;
  background: white;
`;

const StyledTitle = styled.h3`
  min-height: 2rem;
  line-height: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px;
  margin: 0;
  color: rgb(0, 110, 255);
`;

const StyledBody = styled.p`
  border-top: 1px solid rgba(0,0,0,0.1);
  background: rgba(0,0,0,.03);
  flex: 2;
  padding: 12px;
  margin: 0;
  font-size: 13pt;
  color: rgba(0,0,0,.7);
`;

export const PostView: React.FC<Post> = (props:Post) => {
  return (
    <StyledPost>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledBody>{props.body}</StyledBody>
    </StyledPost>
  );
};
