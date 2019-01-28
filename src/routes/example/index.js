import React from "react";
import { connect } from "dva";
import { Style } from "./style";

const Example = () => (
  <div>
    <Style>
      <h1>Example Page</h1>
    </Style>
  </div>
);

Example.propTypes = {};

export default connect(({ app, example, loading }) => ({
  app,
  example,
  loading
}))(Example);
