import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import { getDataFromTree } from "@apollo/client/react/ssr";

import Html from "./Html";
import createApolloClient from "./createApolloClient";

const app = express();

// access everything from the folder directly
app.use(express.static("./build/client"));

/** create apollo client */
app.use(createApolloClient);

app.use((req, use) => {
  // Replace the TODO with this
  getDataFromTree(App)
    .then(() => {
      // Extract the entirety of the Apollo Client cache's current state
      const content = renderToString(res.App);
      const initialState = res.apolloClient.extract(); // =client.extract();

      // Add both the page content and the cache state to a top-level component
      const html = <Html content={content} state={initialState} />;

      // Render the component to static markup and return it
      res.status(200);
      res.send(`<!DOCTYPE html>\n${ReactDOM.renderToStaticMarkup(html)}`);
      res.end();
    })
    .catch((error) => {
      console.warn("< GET DATA FROM TREE : ERROR > ", error);
      res.end();
    });
});

app.listen(3030, function () {
  console.log("Servidor está ouvindo na porta 3030");
});

// get request from html
// app.get("/", function (req, res) {
//   const html = `
//     <!DOCTYPE html>
//         <html>
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport">
//                 <title>React no Servidor</title>
//             </head>
//             <body>
//                 ${ReactDOM.renderToString(<Home />)}
//              **SCRIPT for access everything from the folder directly
//                 <script src="client.bundle.js"></script>
//             </body>
//         </html>
// `;
//   res.send(html);
// });
