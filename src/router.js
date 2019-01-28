import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, routerRedux, Router } from "dva/router";
import dynamic from "dva/dynamic";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
const { ConnectedRouter } = routerRedux;

const Routers = ({ history, app }) => {
  const Login = dynamic({
    app,
    component: () => import("./routes/login/")
  });
  const DashBoard = dynamic({
    app,
    models: () => [import("./models/dashboard")],
    component: () => import("./routes/dashboard/")
  });
  const Schools = dynamic({
    app,
    models: () => [import("./models/schools")],
    component: () => import("./routes/schools/")
  });
  const SchoolDetail = dynamic({
    app,
    models: () => [import("./models/schools")],
    component: () => import("./routes/schools/detail")
  });
  const NotFound = dynamic({
    app,
    component: () => import("./routes/not_found/")
  });
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route exact path="/schools" component={Schools} />
        <Route path="/schools/:id" component={SchoolDetail} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};

export default Routers;
