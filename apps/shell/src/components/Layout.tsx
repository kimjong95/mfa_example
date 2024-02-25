import { useAuth0 } from "@auth0/auth0-react";
import { Button, Icon } from "@career-up/ui-kit";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../constants/Logo";
import {
  appEduBasename,
  appJobBasename,
  appNetworkBasename,
  appPostingBasename,
} from "../constants/prefix";

const Layout = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  const handleLogout = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div>
      <header className="global-nav">
        <div className="global-nav-content">
          <Link className="global-nav-logo" to="/">
            <Logo />
            <span>Career Up</span>
          </Link>
          {!isAuthenticated && (
            <div style={{ marginLeft: 20 }}>
              <Button onClick={handleLogin}>Login</Button>
            </div>
          )}
          {isAuthenticated && (
            <div style={{ marginLeft: 20 }}>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
          <nav className="global-nav-nav">
            <ul className="global-nav-items">
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appPostingBasename}`}
                >
                  <Icon.Home />
                  <span className="global-nav-text">홈</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appNetworkBasename}`}
                >
                  <Icon.UserFriends />
                  <span className="global-nav-text">인맥</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appEduBasename}`}>
                  <Icon.LaptopCode />
                  <span className="global-nav-text">교육</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appJobBasename}`}>
                  <Icon.Home />
                  <span className="global-nav-text">채용공고</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="global-container">{isAuthenticated && <Outlet />}</div>
    </div>
  );
};

export default Layout;
