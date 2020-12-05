import React, { Component } from "react";
import logo from "../../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <img className="logo" src={logo} alt="Logo" />

        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>

          <li>
            <div>Layout Components</div>
            <ul>
              <li>
                <NavLink to="/header">Header</NavLink>
              </li>
              <li>
                <NavLink to="/sidenav">SideNav</NavLink>
              </li>
              <li>
                <NavLink to="/loader">Loader</NavLink>
              </li>
              <li>
                <NavLink to="/popup">Popup</NavLink>
              </li>
              <li>
                <NavLink to="/table">Table</NavLink>
              </li>
              <li>
                <NavLink to="/sorticon">SortIcon</NavLink>
              </li>
              <li>
                <NavLink to="/pagination">Pagination</NavLink>
              </li>
              <li>
                <NavLink to="/alertmessage">AlertMessage</NavLink>
              </li>
              <li>
                <NavLink to="/tabs">Tabs</NavLink>
              </li>
              <li>
                <NavLink to="/expandcollapse">ExpandCollapse</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <div>Form Components</div>
            <ul>
              <li>
                <NavLink to="/">InputText</NavLink>
              </li>
              <li>
                <NavLink to="/">TextArea</NavLink>
              </li>
              <li>
                <NavLink to="/">InputPassword</NavLink>
              </li>
              <li>
                <NavLink to="/">InputPhone</NavLink>
              </li>
              <li>
                <NavLink to="/">InputSearch</NavLink>
              </li>
              <li>
                <NavLink to="/">InputFile</NavLink>
              </li>
              <li>
                <NavLink to="/">Select</NavLink>
              </li>
              <li>
                <NavLink to="/">AutoComplete</NavLink>
              </li>
              <li>
                <NavLink to="/">DatePicker</NavLink>
              </li>
              <li>
                <NavLink to="/">TimePicker</NavLink>
              </li>
              <li>
                <NavLink to="/">CheckBox</NavLink>
              </li>
              <li>
                <NavLink to="/">RadioButton</NavLink>
              </li>
              <li>
                <NavLink to="/">Switch</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <div>Hello User!</div>
            <ul>
              <li>Change Language</li>
              <li>Change Theme</li>
              <li>
                <NavLink to="/">Logout</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
