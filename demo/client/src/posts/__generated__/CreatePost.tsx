import * as Types from '../../types';

import { PostFragment } from './Post';
import gql from 'graphql-tag';
import { PostFragmentDoc } from './Post';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';


export type PostCreateMutationVariables = {
  input: Types.PostCreateInput
};


export type PostCreateMutation = (
  { __typename?: 'Mutation' }
  & { postCreate: Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id'>
    & PostFragment
  )> }
);


export const PostCreateDocument = gql`
    mutation PostCreate($input: PostCreateInput!) {
  postCreate(input: $input) {
    id
    ...Post
  }
}
    ${PostFragmentDoc}`;
export type PostCreateMutationFn = ApolloReactCommon.MutationFunction<PostCreateMutation, PostCreateMutationVariables>;

/**
 * __usePostCreateMutation__
 *
 * To run a mutation, you first call `usePostCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreateMutation, { data, loading, error }] = usePostCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostCreateMutation, PostCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<PostCreateMutation, PostCreateMutationVariables>(PostCreateDocument, baseOptions);
      }
export type PostCreateMutationHookResult = ReturnType<typeof usePostCreateMutation>;
export type PostCreateMutationResult = ApolloReactCommon.MutationResult<PostCreateMutation>;
export type PostCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<PostCreateMutation, PostCreateMutationVariables>;