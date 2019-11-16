import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

// Create the Apollo client.
// We point it to our GraphQL endpoint and give it an instance of InMemoryCache.
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  // Wrap our App in the ApolloProvider so that the client is available in all our components.
  <ApolloProvider client={client}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ApolloProvider>,
  document.getElementById("root"),
);
