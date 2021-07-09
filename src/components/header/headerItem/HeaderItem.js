import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItem = ({ route, isAuth }) => {
 return (
  <>
   {!route.isPrivate && !route.isRestricted && (
    <li key={route.name}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="nawLink"
      activeClassName="nawLinkActive"
     >
      {route.name}
     </NavLink>
    </li>
   )}

   {!route.isPrivate && route.isRestricted && !isAuth && (
    <li key={route.name}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="nawLink"
      activeClassName="nawLinkActive"
     >
      {route.name}
     </NavLink>
    </li>
   )}

   {route.isPrivate && !route.isRestricted && isAuth && (
    <li key={route.name}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="nawLink"
      activeClassName="nawLinkActive"
     >
      {route.name}
     </NavLink>
    </li>
   )}
  </>
 );
};

export default HeaderItem;
