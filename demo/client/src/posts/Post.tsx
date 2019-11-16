import React from "react";
import gql from "graphql-tag";
import * as S from "./styles";
import PostAuthor from "./PostAuthor";
import { PostFragment } from "./__generated__/Post";

export type PostProps = PostFragment;

function Post({ title, body, author }: PostProps) {
  return (
    <S.Card>
      <S.CardContext>
        <S.Title>{title}</S.Title>
        <PostAuthor {...author} />
        <S.Paragraph>{body}</S.Paragraph>
      </S.CardContext>
    </S.Card>
  );
}

// We define our data needs through a fragment on the Post type.
// This way any component rendering a post can aggregated its data dependencies.
// Notice we also nest a fragment from the PostAuthor component, any fields that end up being duplicated will be filtered accordingly.
Post.fragments = {
  post: gql`
    fragment Post on Post {
      title
      body
      author {
        ...PostAuthor
      }
    }
    ${PostAuthor.fragments.author}
  `,
};

export default Post;
