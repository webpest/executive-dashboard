import React from "react";
import ReactDOM from "react-dom";
import dva from "dva";
import { createLogger } from "redux-logger";
import createLoading from "dva-loading";
import { createBrowserHistory as createHistory } from "history";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import appModel from "./models/app";
import appRouter from "./router";
import GlobalStyle from "./theme/global.styles";

function startLogger() {
  return createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error
  });
}

// 1. Initialize
const app = dva({
  ...createLoading({ effects: true })
  // history: createHistory()
});

// 2. Plugins
app.use({
  onAction: process.env.NODE_ENV === "development" ? startLogger() : null
});

// 3. Model
app.model(appModel);

// 4. Router
app.router(appRouter);

// 5. Start
const App = app.start();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);
