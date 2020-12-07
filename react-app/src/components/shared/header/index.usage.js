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
  logo = {
    path: "/home",
    icon: <img src={logo} alt="Logo" />,
  };

  menu = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <FontAwesomeIcon icon={faTachometerAlt} />,
    },
    {
      label: "Section 1",
      icon: <FontAwesomeIcon icon={faHome} />,
      subMenu: [
        {
          label: "Page 1",
          path: "",
          icon: <FontAwesomeIcon icon={faLaptopCode} />,
        },
        {
          label: "Page 2",
          path: "",
          disabled: true,
          icon: <FontAwesomeIcon icon={faLaptopCode} />,
        },
      ],
    },
  ];

  settings = {
    userName: "Mounish Kumar",
    userCode: "GBS04420",
    logoutUrl: "https://www.google.com",
  };

  code = (
    <Header logo={this.logo} menu={this.menu} settings={this.settings} />
  );

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
          {`
<Header
  logo={this.logo}
  menu={this.menu}
  settings={this.settings}
/>
          `}
        </CodeHighlighter>
        <br />
        To configure logo in header:
        <CodeHighlighter language="js">{`
let logo = {
  path: "/dashboard",  // path to redirect on clicking logo
  icon: <img className="logo" src={logo} alt="Logo" />  // img tag for logo
}
        `}</CodeHighlighter>
        <br />
        To configure menu items in header:
        <CodeHighlighter language="js">{`
let menu = [
  {
    label: "Dashboard",  // Text to display the menu item
    path: "/dashboard",  // Path to navigate on clicking menu item
    icon: <FontAwesomeIcon icon={faTachometerAlt} />  // icon for the menu item
  },
  {
    label: "Section 1",  // Text to display the menu item
    icon: <FontAwesomeIcon icon={faHome} />,  // icon for the menu item
    subMenu: [  // To configure sub menu
      {
        label: "Page 1",  // Text to display in sub menu item
        path: "/page1",  // Path to navigate on clicking sub menu item
        icon: <FontAwesomeIcon icon={faLaptopCode} />  // icon for the sub menu item
      },
      {
        label: "Page 2",
        path: "/page2",
        disabled: true,  // To disable menu item
        icon: <FontAwesomeIcon icon={faLaptopCode} />
      }
    ]
  }
]
        `}</CodeHighlighter>
        <br />
        To configure Settings menu in header:
        <CodeHighlighter language="js">{`
let settings = {
  userName: "Mounish Kumar",
  userCode: "GBS04420",
  logoutUrl: "https://www.google.com"
}
        `}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default HeaderUsage;
