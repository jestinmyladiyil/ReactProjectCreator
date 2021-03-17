import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPalette,
  faSignOutAlt,
  faUserCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./../hamburger/index";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { resources } from "./../../../i18n";

class Header extends Component {
  state = { showMenu: false };

  getMenuItem = (item) => {
    const { path, icon, label, disabled, subMenu } = item;

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
            {subMenu && subMenu.length > 0 && !disabled && (
              <FontAwesomeIcon icon={faAngleDown} className="submenu-arrow" />
            )}
          </div>
        )}
      </React.Fragment>
    );
  };

  toggleMenu = (isClose) => this.setState({ showMenu: isClose });

  changeLanguage = (language) => {
    const { i18n } = this.props;
    i18n.changeLanguage(language);
  };

  render() {
    const { logo, menu, settings, i18n, t } = this.props;
    const { userName, userCode, logoutUrl, changeLanguage, changeTheme } =
      settings || {};
    const { language: selectedLanguage } = i18n || {};
    const { showMenu } = this.state;

    return (
      <header>
        <NavLink to={logo.path} className="logo">
          {logo.icon}
        </NavLink>

        <Hamburger onChange={this.toggleMenu} />

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
                    {userName || userCode}
                    {userName && userCode && (
                      <div className="user-code">{userCode}</div>
                    )}
                  </span>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="submenu-arrow"
                  />
                </div>
                <ul>
                  {changeLanguage && (
                    <li>
                      <div className="menu-item disable-hover">
                        <FontAwesomeIcon className="icon" icon={faGlobe} />
                        <span>
                          <div>{t("changeLanguage")}</div>
                          <div className="language-options">
                            {resources &&
                              Object.keys(resources).map((language) => (
                                <div
                                  key={language}
                                  className={`language ${
                                    language === selectedLanguage && "selected"
                                  }`}
                                  onClick={() => this.changeLanguage(language)}
                                >
                                  {language.toUpperCase()}
                                </div>
                              ))}
                          </div>
                        </span>
                      </div>
                    </li>
                  )}
                  {changeTheme && (
                    <li>
                      <div className="menu-item disable-hover">
                        <FontAwesomeIcon className="icon" icon={faPalette} />
                        <span>{t("changeTheme")}</span>
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
                          <span>{t("logout")}</span>
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

Header.propTypes = {
  logo: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

export default withTranslation()(Header);
