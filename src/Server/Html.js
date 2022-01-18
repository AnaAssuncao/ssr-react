import React from "react";

const Html = ({ content, styles, state }) => (
  <html>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      />
      <title>SSR- React</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
        rel="stylesheet"
      />
      <head dangerouslySetInnerHTML={{__html: styles}}/>

      <script src="client.bundle.js" defer></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
            /</g,
            "\\u003c"
          )}`,
        }}
      />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
    </body>
  </html>
);

export default Html;
