import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Header from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/images/logo.svg";
import {
  faHome,
  faLaptopCode,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

class HeaderUsage extends Component {
  navOptions = {
    logo: {
      path: "/home",
      icon: <img src={logo} alt="Logo" />,
    },
    settings: {
      userName: "Mounish Kumar",
      userCode: "GBS04420",
      logoutUrl: "https://www.google.com",
    },
    menu: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <FontAwesomeIcon className="icon" icon={faTachometerAlt} />,
      },
      {
        label: "Section 1",
        icon: <FontAwesomeIcon className="icon" icon={faHome} />,
        subMenu: [
          {
            label: "Page 1",
            path: "",
            icon: <FontAwesomeIcon className="icon" icon={faLaptopCode} />,
          },
          {
            label: "Page 2",
            path: "",
            disabled: true,
            icon: <FontAwesomeIcon className="icon" icon={faLaptopCode} />,
          },
        ],
      },
      {
        label: "Section A",
        subMenu: [
          { label: "Page A", path: "" },
          { label: "Page B", path: "" },
        ],
      },
    ],
  };

  code = (<Header navOptions={this.navOptions} />);

  render() {
    return (
      <React.Fragment>
        <h1>Header</h1>
        <div>Add some description here</div>
        <br />
        <h3>Preview</h3>
        <div>{this.code}</div>
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`<Header navOptions={this.navOptions} />`}
        </CodeHighlighter>
        <br />
        To configure logo in header:
        <CodeHighlighter language="js">{`
let navOptions = {
  logo: {
    path: "/dashboard",  // path to redirect on clicking logo
    icon: <img className="logo" src={logo} alt="Logo" />  // img tag for logo
  }
}
        `}</CodeHighlighter>
        <br />
        To configure menu items in header:
        <CodeHighlighter language="js">{`
let navOptions = {
  menu: [
    {
      label: "Dashboard",  // Text to display the menu item
      path: "/dashboard",  // Path to navigate on clicking menu item
      icon: <FontAwesomeIcon className="icon" icon={faTachometerAlt} />  // icon for the menu item
    },
    {
      label: "Section 1",  // Text to display the menu item
      icon: <FontAwesomeIcon className="icon" icon={faHome} />,  // icon for the menu item
      subMenu: [  // To configure sub menu
        {
          label: "Page 1",
          path: "/page1",
          icon: <FontAwesomeIcon className="icon" icon={faLaptopCode} />
        },
        {
          label: "Page 2",
          path: "/page2",
          disabled: true,  // To disable menu item
          icon: <FontAwesomeIcon className="icon" icon={faLaptopCode} />
        }
      ]
    }
  ]
}
        `}</CodeHighlighter>
        <br />
        To configure Settings menu in header:
        <CodeHighlighter language="js">{`
let navOptions = {
  settings: {
    userName: "Mounish Kumar",
    userCode: "GBS04420",
    logoutUrl: "https://www.google.com"
  }
}
        `}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default HeaderUsage;
