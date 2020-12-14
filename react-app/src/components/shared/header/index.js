import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPalette,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = { showMenu: false };

  getMenuItem = (item) => {
    const { path, icon, label } = item;

    return (
      <React.Fragment>
        {path && (
          <NavLink to={path} className="menu-item" activeClassName="active">
            {icon}
            <span>{label}</span>
          </NavLink>
        )}

        {!path && (
          <div className="menu-item">
            {icon}
            <span>{label}</span>
          </div>
        )}
      </React.Fragment>
    );
  };

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

  render() {
    const { logo, menu, settings } = this.props;
    const { userName, userCode, logoutUrl, changeLanguage, changeTheme } =
      settings || {};

    const { showMenu } = this.state;
    let hamburgerClasses = `hamburger ${showMenu ? "close" : ""}`;

    return (
      <header>
        <NavLink to={logo.path} className="logo">
          {logo.icon}
        </NavLink>

        <div className={hamburgerClasses} onClick={this.toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {menu && (
          <ul className={showMenu ? "show" : ""}>
            {menu.length > 0 &&
              menu.map((item, i) => (
                <li key={i} className={item.disabled ? "disabled" : ""}>
                  {this.getMenuItem(item)}

                  {item.subMenu && (
                    <ul>
                      {item.subMenu.length > 0 &&
                        item.subMenu.map((subItem, j) => (
                          <li
                            key={j}
                            className={
                              item.disabled || subItem.disabled
                                ? "disabled"
                                : ""
                            }
                          >
                            {this.getMenuItem(subItem)}
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}

            {settings && (
              <li>
                <div className="menu-item">
                  <FontAwesomeIcon className="icon" icon={faUserCircle} />
                  <span>
                    {userName || "Welcome"}
                    <div className="user-code">{userCode}</div>
                  </span>
                </div>
                <ul>
                  {changeLanguage && (
                    <li className="disabled">
                      <div className="menu-item">
                        <FontAwesomeIcon className="icon" icon={faGlobe} />
                        <span>Change Language</span>
                      </div>
                    </li>
                  )}
                  {changeTheme && (
                    <li className="disabled">
                      <div className="menu-item">
                        <FontAwesomeIcon className="icon" icon={faPalette} />
                        <span>Change Theme</span>
                      </div>
                    </li>
                  )}
                  {logoutUrl && (
                    <li>
                      <a href={logoutUrl}>
                        <div className="menu-item">
                          <FontAwesomeIcon
                            className="icon"
                            icon={faSignOutAlt}
                          />
                          <span>Logout</span>
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        )}
      </header>
    );
  }
}

export default Header;
