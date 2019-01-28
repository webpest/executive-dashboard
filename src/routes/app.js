import React from "react";
import { connect } from "dva";
import NProgress from "nprogress";

let lastHref;

const App = ({ app, loading }) => {
  const href = window.location.href;

  if (lastHref !== href) {
    NProgress.start();
    if (!loading.global) {
      NProgress.done();
      lastHref = href;
    }
  }
  return (
    <div>
      <h1>Frontend Starter Pack</h1>
    </div>
  );
};

App.propTypes = {};

export default connect(({ app, loading }) => ({ app, loading }))(App);
