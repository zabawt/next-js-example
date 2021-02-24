import { NextPage } from 'next';
import React from 'react';
import { PostView } from '../components/Post';
import { Post } from '../interfaces/post';
import styled from 'styled-components';
import { PostsGraphql } from '../services/PostsGraphql';
import { LabelsProvider } from '../services/LabelsProvider';

interface HomeProps {
  posts: Post[];
  translations: Translations;
}

interface Translations {
  [key: string]: string;
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
      <img src="/next.png" width="200px" />
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
  const posts = await new PostsGraphql().fetchPosts();
  const translations = await LabelsProvider.getTranslations();
  return { posts, translations };
};

/**
 * @param context
 * Load props on page generation, those are best used for static data
 */
// export const getStaticProps: GetStaticProps<HomeProps> = async (/*context:DocumentContext*/) => {
//   const posts = await new PostsGraphql().fetchPosts();
//   const translations = await LabelsProvider.getTranslations();
//   return { props: { posts, translations } };
// };

export default Home;
