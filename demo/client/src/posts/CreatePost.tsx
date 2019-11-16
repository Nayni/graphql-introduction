import React from "react";
import gql from "graphql-tag";
import * as S from "./styles";
import { GetAllPostsQuery } from "./__generated__/Posts";
import { usePostCreateMutation } from "./__generated__/CreatePost";
import Posts from "./Posts";
import Post from "./Post";
import CreatePostForm from "./CreatePostForm";

function CreatePost() {
  // Unlike queries, mutations are NOT fired instantly.
  // We receive a function that we can manually call whenever the mutation needs to happen.
  // In this case we'll call it on the onSubmit callback of our CreatePostForm.
  // Note that this custom hook is auto-generated by graphql-code-generator.
  const [postCreate] = usePostCreateMutation();

  return (
    <S.Container>
      <CreatePostForm
        onSubmit={async ({ author, title, body }) => {
          // We call our mutation.
          await postCreate({
            variables: {
              input: {
                authorId: author,
                title,
                body,
              },
            },
            // And define an update function to let Apollo Client update its cache.
            // This ensures our Posts list is updated and shows the newly created post.
            // Another approach would be to use the refetchQueries option (which will actively query the server again.)
            // However since we're getting a new Post type back after the mutation, we can also take this data
            // and manually update the cache.
            update(cache, { data }) {
              // First we read the current state of the cache.
              const getAllPostsQuery = cache.readQuery<GetAllPostsQuery>({
                query: Posts.queries.getAllPosts,
              });

              // And then we write a new entry into the cache, including the data returned from our mutation.
              cache.writeQuery<GetAllPostsQuery>({
                query: Posts.queries.getAllPosts,
                data: {
                  posts: [data!.postCreate!, ...getAllPostsQuery!.posts],
                },
              });
            },
          });
        }}
      />
    </S.Container>
  );
}

// We define our data needs next to the component.
// In this case it's the mutation to create a new post.
//
// In order to ensure Apollo Client can keep its local cache consistent we use the Post components fragment
// to ask for the right fields after the post has been created.
// This way Apollo can take all the information from the newly created post and insert it into the cahce.
CreatePost.mutations = {
  postCreate: gql`
    mutation PostCreate($input: PostCreateInput!) {
      postCreate(input: $input) {
        id
        ...Post
      }
    }
    ${Post.fragments.post}
  `,
};

export default CreatePost;
