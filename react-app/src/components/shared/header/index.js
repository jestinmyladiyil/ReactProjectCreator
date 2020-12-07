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
    const { navOptions } = this.props;
    const { logo, menu, settings } = navOptions || {};
    const { userName, userCode, logoutUrl } = settings || {};

    return (
      <header>
        {navOptions && (
          <React.Fragment>
            <NavLink to={logo.path} className="logo">
              {logo.icon}
            </NavLink>

            {menu && (
              <ul>
                {menu.length > 0 &&
                  menu.map((item) => (
                    <li className={item.disabled ? "disabled" : ""}>
                      {this.getMenuItem(item)}

                      {item.subMenu && (
                        <ul>
                          {item.subMenu.length > 0 &&
                            item.subMenu.map((subItem) => (
                              <li
                                className={subItem.disabled ? "disabled" : ""}
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
                      <span className="user">
                        {userName}
                        <div className="user-code">{userCode}</div>
                      </span>
                    </div>
                    <ul>
                      <li className="disabled">
                        <div className="menu-item">
                          <FontAwesomeIcon className="icon" icon={faGlobe} />
                          <span>Change Language</span>
                        </div>
                      </li>
                      <li className="disabled">
                        <div className="menu-item">
                          <FontAwesomeIcon className="icon" icon={faPalette} />
                          <span>Change Theme</span>
                        </div>
                      </li>
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
          </React.Fragment>
        )}
      </header>
    );
  }
}

export default Header;
