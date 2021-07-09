import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ path, component, exact, isAuth, isRestricted }) => {
 return isAuth && isRestricted ? (
  <Redirect to="/" />
 ) : (
  <Route path={path} exact={exact} component={component} />
 );
};

export default PublicRoutes;
