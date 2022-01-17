import React from "react";
import fetch from 'cross-fetch';
import { hydrate, render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from "@apollo/client";

import Home from "../Components/Home";

import { ThemeProvider } from 'styled-components'
import { Theme } from '../Style/HomeStyle.style'

const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    credentials: "same-origin",
    fetch: fetch,
  }),
  ssrForceFetchDelay: 100,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  ssrForceFetchDelay: 100
});

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes) {
  hydrate(
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
    </ApolloProvider>,
    rootElement
  );
} else {
  render( <div>RENDER</div>,rootElement)
 
}
