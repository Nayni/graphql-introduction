import * as Types from '../../types';

import { PostFragment } from './Post';
import gql from 'graphql-tag';
import { PostFragmentDoc } from './Post';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';


export type GetAllPostsQueryVariables = {};


export type GetAllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id'>
    & PostFragment
  )> }
);


export const GetAllPostsDocument = gql`
    query GetAllPosts {
  posts {
    id
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, baseOptions);
      }
export function useGetAllPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, baseOptions);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = ApolloReactCommon.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;