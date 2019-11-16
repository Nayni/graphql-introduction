import React from "react";
import gql from "graphql-tag";
import * as S from "./styles";
import avatarDefault from "../images/avatar.png";
import { PostAuthorFragment } from "./__generated__/PostAuthor";

export type PostAuthorProps = PostAuthorFragment;

function PostAuthor({ fullName, profilePicture }: PostAuthorProps) {
  const avatarUrl = profilePicture ? profilePicture : avatarDefault;

  return (
    <S.AuthorContainer>
      <S.Image src={avatarUrl} />
      <S.SmallText>{fullName}</S.SmallText>
    </S.AuthorContainer>
  );
}

// We define our data needs through a fragment on the User type.
// This way any component using the PostAuthor component can use this fragment to aggregate it required data.
PostAuthor.fragments = {
  author: gql`
    fragment PostAuthor on User {
      id
      fullName
      profilePicture
    }
  `,
};

export default PostAuthor;
