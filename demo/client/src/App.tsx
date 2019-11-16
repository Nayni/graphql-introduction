import React from "react";
import * as S from "./styles";
import Posts from "./posts";
import CreatePost from "./posts/CreatePost";

function App() {
  return (
    <div>
      <S.GlobalStyle />
      <S.Main>
        <CreatePost />
        <Posts />
      </S.Main>
    </div>
  );
}

export default App;
