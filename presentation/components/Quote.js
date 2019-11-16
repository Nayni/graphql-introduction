import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

const QuoteWrapper = styled.div`
  font-style: italic;
  color: #858584;
  margin-bottom: 50px;
`;

const PreAndSuffix = styled.span`
  color: #c4c4c3;
  font-style: italic;
  font-weight: bold;
`;

const Source = styled.a`
  display: block;
  font-size: 32px;
  color: #e535ab;
  width: 100%;
  text-align: right;
`;

function Quote({ quote, source }) {
  return (
    <Container>
      <QuoteWrapper>
        <PreAndSuffix>"</PreAndSuffix>
        {quote}
        <PreAndSuffix>"</PreAndSuffix>
      </QuoteWrapper>
      <Source href={source}>{source}</Source>
    </Container>
  );
}

export { Quote };
