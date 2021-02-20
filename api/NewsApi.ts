import { Author } from '../interfaces/author';
import { Post } from '../interfaces/post';
import { PostAggregate } from '../interfaces/postAggragate';

export class NewsApi {

  async fetchPosts():Promise<PostAggregate[]> {
    const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    const authors = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

    return posts.map((post:Post) => ({
      ...post,
      author: authors.filter((author: Author)=> author.id === post.userId),
    }));
  }
}