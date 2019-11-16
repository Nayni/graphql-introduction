import React from "react";
import { Appear } from "mdx-deck";
import styled from "styled-components";

const Container = styled.div`
  min-width: 800px;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style: square;
  text-align: left;
  margin-bottom: 10px;
`;

function BulletList(props) {
  return (
    <Container>
      <Ul>
        <Appear>{props.children}</Appear>
      </Ul>
    </Container>
  );
}

function BulletPoint(props) {
  return <Li {...props} />;
}

export { BulletList, BulletPoint };
