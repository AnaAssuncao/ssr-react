import React from 'react'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import fetch from 'cross-fetch';
import Layout from "../Routes/Layout";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider } from 'styled-components'
import { Theme } from '../Style/Theme'
import  GlobalStyle  from '../Style/Global'

const createApolloClient = (req, res, next) => {
  res.apolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "https://48p1r2roz4.sse.codesandbox.io",
      credentials: "same-origin",
      headers: {
        cookie: req.header("Cookie"),
      },
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });
  
  const context = {}

  res.App = (
    <ApolloProvider client={res.apolloClient}>
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </StaticRouter>
    </ApolloProvider>
  );

  next();
};

export default createApolloClient;
