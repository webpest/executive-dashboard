import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";

import { Loader, DocLayout } from "../../components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/default.theme";

storiesOf("Loader", module).add("default", () => (
  <div>
    <ThemeProvider theme={theme}>
      <DocLayout title="Loader">
        <Loader loading={true} />
        <SyntaxHighlighter
          language="html"
          style={docco}
        >{`<Loader loading={true} />`}</SyntaxHighlighter>
      </DocLayout>
    </ThemeProvider>
  </div>
));
