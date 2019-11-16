import React from "react";
import gql from "graphql-tag";
import Post from "./Post";
import { useGetAllPostsQuery } from "./__generated__/Posts";

function Posts() {
  const { loading, error, data } = useGetAllPostsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data && data.posts.map(post => <Post key={post.id} {...post} />)}
    </div>
  );
}

Posts.queries = {
  getAllPosts: gql`
    query GetAllPosts {
      posts {
        id
        ...Post
      }
    }
    ${Post.fragments.post}
  `,
};

export default Posts;
