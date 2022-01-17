import React from "react";
import fetch from 'cross-fetch';
import { hydrate, render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Home from "../Components/Home";

const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    credentials: "same-origin",
    fetch: fetch,
  }),
  ssrForceFetchDelay: 100,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes) {
  hydrate(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>,
    rootElement
  );
} else {
  <div>RENDER</div>;
}
