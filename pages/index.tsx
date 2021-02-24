import { NextPage } from 'next';
import React from 'react';
import { PostView } from '../components/Post';
import { Post } from '../interfaces/post';
import styled from 'styled-components';

interface HomeProps {
  posts: Post[];
  translations: Translations;
}

interface Translations {
  [key: string] : string;
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

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <h2>{props.translations.welcome}</h2>
      <img src="/next.png" width="200px"/>
      <StyledHome>
        {props.posts.map((post: Post) => (
          <PostView key={post.id} {...post} />
        ))}
      </StyledHome>
    </>
  );
};

/**
 * Load props and serve them directly from server
 */
Home.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await res.json();
  const translations = await (
    await fetch('https://github.com/zabawt/example-js/raw/main/text.json')
  ).json();
  return { posts: json, translations };
};

/**
 * @param context
 * Load props on page generation, those are best used for static data
 */
// export async function getStaticProps(/*context:DocumentContext*/):Promise<{props:HomeProps}> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const json = await res.json();
//   return { props: {posts: json }};
// }

export default Home;
