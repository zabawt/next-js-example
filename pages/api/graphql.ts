/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloServer, gql } from 'apollo-server-micro';
import { Author } from '../../interfaces/author';
import { Post } from '../../interfaces/post';

const typeDefs = gql`
  type Query {
    posts: [Post]
    post(id: Int!): Post
  }

  type Post {
    id: Int!
    author: User!
    title: String!
    body: String!
  }

  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
  }
`;

/**
 * In real implementation for aggragating endpoint results
 * we would use either query stitching or Apollo Federation
 */
const resolvers = {
  Query: {
    async posts() {
      const posts = await (await fetch(`${process.env.uri}/posts`)).json();
      const users = await (await fetch(`${process.env.uri}/users`)).json();
      return posts.map((post: Post) => ({
        ...post,
        author: users.find((author: Author) => author.id === post.userId),
      }));
    },
    async post(parent: any, args: any, context: any) {
      const { id } = args;
      const post = await (await fetch(`${process.env.uri}/posts/${id}`)).json();
      const author = await (
        await fetch(`${process.env.uri}/users/${post.userId}`)
      ).json();
      return { ...post, author };
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
