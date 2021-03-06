import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCommentAlt,
  faDirections,
  faDoorOpen,
  faFileCode,
  faHome,
  faLaptopCode,
  faListOl,
  faSpinner,
  faTable,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import i18n from "../../i18n";

const navOptions = {
  logo: {
    path: "/dashboard",
    icon: <img src={logo} alt="Logo" />,
  },
  settings: {
    userName: "Mounish Kumar",
    userCode: "GBS04420",
    logoutUrl: "https://www.google.com",
    changeLanguage: true,
    changeTheme: true,
  },
  menu: [
    {
      label: i18n.t("dashboard"),
      path: "/dashboard",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      label: i18n.t("layoutComponents"),
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      subMenu: [
        {
          label: "Header",
          path: "/header",
          icon: <FontAwesomeIcon icon={faBars} />,
        },
        {
          label: "SideNav",
          path: "/sidenav",
          icon: <FontAwesomeIcon icon={faDirections} />,
        },
        {
          label: "Loader",
          path: "/loader",
          icon: <FontAwesomeIcon icon={faSpinner} />,
        },
        {
          label: "Popup",
          path: "/popup",
          icon: <FontAwesomeIcon icon={faWindowRestore} />,
        },
        {
          label: "Table",
          path: "/table",
          icon: <FontAwesomeIcon icon={faTable} />,
        },
        {
          label: "Pagination",
          path: "/pagination",
          icon: <FontAwesomeIcon icon={faListOl} />,
        },
        {
          label: "AlertMessage",
          path: "/alertmessage",
          icon: <FontAwesomeIcon icon={faCommentAlt} />,
        },
        {
          label: "Tabs",
          path: "/tabs",
          icon: <FontAwesomeIcon icon={faTable} />,
        },
        {
          label: "ExpandCollapse",
          path: "/expandcollapse",
          icon: <FontAwesomeIcon icon={faDoorOpen} />,
        },
      ],
    },
    {
      label: i18n.t("formComponents"),
      icon: <FontAwesomeIcon icon={faFileCode} />,
      disabled: true,
      subMenu: [
        { label: "InputText", path: "" },
        { label: "TextArea", path: "" },
        { label: "InputPassword", path: "" },
        { label: "InputPhone", path: "" },
        { label: "InputIcon", path: "" },
        { label: "InputFile", path: "" },
        { label: "Select", path: "" },
        { label: "AutoComplete", path: "" },
        { label: "DatePicker", path: "" },
        { label: "TimePicker", path: "" },
        { label: "CheckBox", path: "" },
        { label: "RadioButton", path: "" },
        { label: "Switch", path: "" },
      ],
    },
  ],
};

i18n.on("languageChanged", (language) => {
  navOptions.menu[0].label = i18n.t("dashboard");
  navOptions.menu[1].label = i18n.t("layoutComponents");
  navOptions.menu[2].label = i18n.t("formComponents");
});

export default navOptions;
