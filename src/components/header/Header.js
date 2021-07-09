import React from "react";
import { mainRoutes } from "../../routes/mainRouters";
import HeaderItem from "./headerItem/HeaderItem";
import { connect } from "react-redux";

import { HeaderConteinerStyled } from "./HeaderStyled";
import { isAuthSelector } from "../../redux/auth/authSelectors";
import { logoutOperation } from "../../redux/auth/authOperations";
import { ReactComponent as Icon } from "../../images/avatar.svg";

const Header = ({ isAuth, logout }) => {
 return (
  <HeaderConteinerStyled>
   <ul className="headerConteiner">
    {mainRoutes.map((route) => (
     <HeaderItem route={route} isAuth={isAuth} key={route.name} />
    ))}
    {isAuth && (
     <>
      <li className="nawLink"  onClick={logout}>
       <Icon width="40" height="40" />
       <span>LogOut</span>
      </li>
     </>
    )}
   </ul>
  </HeaderConteinerStyled>
 );
};

const mapStateToProps = (state, ownProps) => ({
 isAuth: isAuthSelector(state),
});

const mapDispatchToProps = {
 logout: logoutOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
