import * as Types from '../../types';

import gql from 'graphql-tag';

export type PostAuthorFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'id' | 'fullName' | 'profilePicture'>
);

export const PostAuthorFragmentDoc = gql`
    fragment PostAuthor on User {
  id
  fullName
  profilePicture
}
    `;