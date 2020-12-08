import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPalette,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

class SideNav extends Component {
  state = {};

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

  render() {
    const { logo, menu, settings } = this.props;
    const { userName, userCode, logoutUrl, changeLanguage, changeTheme } =
      settings || {};

    return (
      <nav>
        <NavLink to={logo.path} className="logo">
          {logo.icon}
        </NavLink>

        {settings && (
          <div className="menu-item user">
            <FontAwesomeIcon className="icon" icon={faUserCircle} />
            <span>
              {userName || "Welcome"}
              <div className="user-code">{userCode}</div>
            </span>
          </div>
        )}

        {menu && (
          <ul className="menu">
            {menu.length > 0 &&
              menu.map((item) => (
                <li className={item.disabled ? "disabled" : ""}>
                  {this.getMenuItem(item)}

                  {item.subMenu && (
                    <ul>
                      {item.subMenu.length > 0 &&
                        item.subMenu.map((subItem) => (
                          <li
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
          </ul>
        )}

        {logoutUrl && (
          <a href={logoutUrl}>
            <div className="menu-item logout">
              <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
              <span>Logout</span>
            </div>
          </a>
        )}
      </nav>
    );
  }
}

export default SideNav;
