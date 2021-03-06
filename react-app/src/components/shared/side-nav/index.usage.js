import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import SideNav from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/images/logo.svg";
import {
  faHome,
  faLaptopCode,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";

class SideNavUsage extends Component {
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
    changeLanguage: true,
    changeTheme: true,
  };

  code = (
    <SideNav logo={this.logo} menu={this.menu} settings={this.settings} />
  );

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <h1>SideNav</h1>
        <br />
        <h3>{t("preview")}</h3>
        <div className="viewport">{this.code}</div>
        <br />
        <h3>{t("usage")}</h3>
        <CodeHighlighter language="html">
          {`
<SideNav
  logo={this.logo}
  menu={this.menu}
  settings={this.settings}
/>
          `}
        </CodeHighlighter>
        <br />
        To configure logo in SideNav:
        <CodeHighlighter language="js">{`
logo = {
  path: "/dashboard",  // Path to redirect on clicking logo
  icon: <img className="logo" src={logo} alt="Logo" />  // img tag for logo
}
        `}</CodeHighlighter>
        <br />
        To configure menu items in SideNav:
        <CodeHighlighter language="js">{`
menu = [
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
        label: "Page 2",  // Text to display in sub menu item
        path: "/page2", // Path to navigate on clicking sub menu item
        disabled: true,  // To disable menu item
        icon: <FontAwesomeIcon icon={faLaptopCode} />  // icon for the sub menu item
      }
    ]
  }
]
        `}</CodeHighlighter>
        <br />
        To configure Settings menu in SideNav:
        <CodeHighlighter language="js">{`
settings = {
  userName: "Mounish Kumar",  // User name to display in the nav bar
  userCode: "GBS04420",  // User code to display
  logoutUrl: "https://www.google.com",  // URL to redirect on clicking logout
  changeLanguage: true,  // To show Change Language setting
  changeTheme: true  // To show Change Theme setting
}
        `}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default withTranslation()(SideNavUsage);
