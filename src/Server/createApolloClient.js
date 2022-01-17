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
import { Theme } from '../Style/HomeStyle.style'

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

  res.App = (
    <ApolloProvider client={res.apolloClient}>

      <StaticRouter>
        <ThemeProvider theme={Theme}>
          <Layout />
        </ThemeProvider>
      </StaticRouter>
    </ApolloProvider>
  );

  next();
};

export default createApolloClient;
