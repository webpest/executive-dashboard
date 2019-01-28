import React from "react";
import { connect } from "dva";
import { Style } from "./style";

const NotFound = () => (
  <div>
    <Style>
      <h1>404 Page</h1>
    </Style>
  </div>
);

NotFound.propTypes = {};

export default connect(({ app, loading }) => ({
  app,
  loading
}))(NotFound);
