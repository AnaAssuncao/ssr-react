import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import fetch from "node-fetch";

import Home from "../Components/Home";

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
      <Home />
    </ApolloProvider>
  );

  next();
};

export default createApolloClient;
