import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ path, component, exact, isAuth }) => {
 return !isAuth ? (
  <Redirect to="/login" />
 ) : (
  <Route path={path} exact={exact} component={component} />
 );
};

export default PrivateRoutes;
