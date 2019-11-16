import * as Types from '../../types';

import { PostAuthorFragment } from './PostAuthor';
import gql from 'graphql-tag';
import { PostAuthorFragmentDoc } from './PostAuthor';


export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Types.Post, 'title' | 'body'>
  & { author: (
    { __typename?: 'User' }
    & PostAuthorFragment
  ) }
);

export const PostFragmentDoc = gql`
    fragment Post on Post {
  title
  body
  author {
    ...PostAuthor
  }
}
    ${PostAuthorFragmentDoc}`;