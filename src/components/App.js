import React from "react";
import Header from "./header/Header";

import { Switch } from "react-router";
import { mainRoutes } from "../routes/mainRouters";
import PrivateRoutes from "../routes/PrivateRoutes";
import PublicRoutes from "../routes/PublicRoutes";
import {  useSelector } from "react-redux";
import { isAuthSelector } from "../redux/auth/authSelectors";

const App = () => {
 const isAuth = useSelector(isAuthSelector);
 return (
  <>
   <Header />
   <Switch>
    {mainRoutes.map((route) =>
     route.isPrivate ? (
      <PrivateRoutes
       path={route.path}
       exact={route.exact}
       component={route.component}
       key={route.path}
       isAuth={isAuth}
       isRestricted={route.isRestricted}
      />
     ) : (
      <PublicRoutes
       path={route.path}
       exact={route.exact}
       component={route.component}
       key={route.path}
       isAuth={isAuth}
       isRestricted={route.isRestricted}
      />
     )
    )}
   </Switch>
  </>
 );
};

export default App;
