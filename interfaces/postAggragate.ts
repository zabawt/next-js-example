import { Author } from './author';
import { Post } from './post';

export interface PostAggregate extends Post {
  author: Pick<Author, 'name'>
}