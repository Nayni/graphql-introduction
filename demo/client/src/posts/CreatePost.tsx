import React from "react";
import gql from "graphql-tag";
import * as S from "./styles";
import { GetAllPostsQuery } from "./__generated__/Posts";
import { usePostCreateMutation } from "./__generated__/CreatePost";
import Posts from "./Posts";
import Post from "./Post";
import CreatePostForm from "./CreatePostForm";

function CreatePost() {
  const [postCreate] = usePostCreateMutation();

  return (
    <S.Container>
      <CreatePostForm
        onSubmit={async ({ author, title, body }) => {
          await postCreate({
            variables: {
              input: {
                authorId: author,
                title,
                body,
              },
            },
            update(cache, { data }) {
              const getAllPostsQuery = cache.readQuery<GetAllPostsQuery>({
                query: Posts.queries.getAllPosts,
              });

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
