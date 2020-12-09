import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPalette,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import ExpandCollapse from "./../expand-collapse/index";

class SideNav extends Component {
  state = {};

  getMenuItem = (item) => {
    const { path, icon, label, disabled } = item;
    let classes = `menu-item ${disabled && "disabled"}`;

    return (
      <React.Fragment>
        {path && (
          <NavLink to={path} className={classes} activeClassName="active">
            {icon}
            <span>{label}</span>
          </NavLink>
        )}

        {!path && (
          <div className={classes}>
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
        {logo && (
          <NavLink to={logo.path} className="logo">
            {logo.icon}
          </NavLink>
        )}

        {(userName || userCode) && (
          <div className="menu-item user">
            <FontAwesomeIcon className="icon" icon={faUserCircle} />
            <span>
              {userName || userCode}
              {userName && userCode && (
                <div className="user-code">{userCode}</div>
              )}
            </span>
          </div>
        )}

        <div className="menu">
          {menu &&
            menu.length > 0 &&
            menu.map((item) => (
              <ExpandCollapse
                collapse={true}
                collapsible={this.getMenuItem(item)}
              >
                {item.subMenu &&
                  item.subMenu.length > 0 &&
                  item.subMenu.map((subItem) => (
                    <div className="sub-menu">{this.getMenuItem(subItem)}</div>
                  ))}
              </ExpandCollapse>
            ))}

          {changeLanguage && (
            <div className="menu-item disabled">
              <FontAwesomeIcon className="icon" icon={faGlobe} />
              <span>Change Language</span>
            </div>
          )}

          {changeTheme && (
            <div className="menu-item disabled">
              <FontAwesomeIcon className="icon" icon={faPalette} />
              <span>Change Theme</span>
            </div>
          )}
        </div>

        {logoutUrl && (
          <a href={logoutUrl} className="menu-item logout">
            <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
            <span>Logout</span>
          </a>
        )}
      </nav>
    );
  }
}

export default SideNav;
