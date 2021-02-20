import { NextPage } from 'next';
import React from 'react';
import { PostView } from '../components/Post';
import { Post } from '../interfaces/post';
import styled from 'styled-components';

interface HomeProps {
  posts: Post[]
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 60%;
  margin: auto;
`;

const Home:NextPage<{posts:Post[]}> = (props:HomeProps) => {
  return <StyledHome>
    {props.posts.map((post:Post)=><PostView key={post.id} {...post}/>)}
  </StyledHome>;
};


/**
 * 
 * Load props and serve them directly from server
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
Home.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await res.json();
  return { posts: json };
};

/**
 * @param context
 * Load props on page generation, those are best used for static data
 */
// export async function getStaticProps(context) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const json = await res.json()
//   return { props: {posts: json }}
// }

export default Home;