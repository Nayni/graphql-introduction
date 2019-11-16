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
