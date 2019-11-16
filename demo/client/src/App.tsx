import React from "react";
import * as S from "./styles";
import Posts from "./posts";
import CreatePost from "./posts/CreatePost";

function App() {
  return (
    <S.Main>
      <CreatePost />
      <Posts />
    </S.Main>
  );
}

export default App;
