import React from "react";
import { connect } from "dva";
import { Style } from "./style";

const Login = () => (
  <div>
    <Style>
      <h1>Login Page</h1>
    </Style>
  </div>
);

Login.propTypes = {};

export default connect(({ app, loading }) => ({
  app,
  loading
}))(Login);
