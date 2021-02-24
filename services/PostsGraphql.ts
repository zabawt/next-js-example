import { PostAggregate } from '../interfaces/postAggragate';

export class PostsGraphql {
  async fetchPosts(): Promise<PostAggregate[]> {
    const query = '{posts {id, title, body}}';
    //here's why this has to be absolute url https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
    const res = await fetch('http://localhost:3000/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const {
      data: { posts },
    } = await res.json();
    return posts;
  }
}
