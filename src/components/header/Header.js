import React from "react";
import { mainRoutes } from "../../routes/mainRouters";
import HeaderItem from "./headerItem/HeaderItem";
import { connect, useDispatch, useSelector } from "react-redux";

import { HeaderConteinerStyled } from "./HeaderStyled";
import {
 isAuthSelector,
 userNameSelector,
} from "../../redux/auth/authSelectors";
import { logoutOperation } from "../../redux/auth/authOperations";
import { ReactComponent as Icon } from "../../images/avatar.svg";

const Header = ({ logout }) => {
 const isAuth = useSelector(isAuthSelector);
 const userName = useSelector(userNameSelector);
 //  const dispatch = useDispatch();

 return (
  <HeaderConteinerStyled>
   <ul className="headerConteiner">
    {mainRoutes.map((route) => (
     <HeaderItem route={route} isAuth={isAuth} key={route.name} />
    ))}
    {isAuth && (
     <>
      <li className="nawLink" onClick={logout}>
       <p className="userName"> {userName ? userName.name : "User"}</p>
       <Icon width="40" height="40" />
       <span>LogOut</span>
      </li>
     </>
    )}
   </ul>
  </HeaderConteinerStyled>
 );
};
// export default Header;

const mapDispatchToProps = {
 logout: logoutOperation,
};

export default connect(null, mapDispatchToProps)(Header);
