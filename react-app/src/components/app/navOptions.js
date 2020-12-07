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
  faSort,
  faSpinner,
  faTable,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

const navOptions = {
  logo: {
    path: "/dashboard",
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
      icon: <FontAwesomeIcon className="icon" icon={faHome} />,
    },
    {
      label: "Layout Components",
      icon: <FontAwesomeIcon className="icon" icon={faLaptopCode} />,
      subMenu: [
        {
          label: "Header",
          path: "/header",
          icon: <FontAwesomeIcon className="icon" icon={faBars} />,
        },
        {
          label: "SideNav",
          path: "/sidenav",
          icon: <FontAwesomeIcon className="icon" icon={faDirections} />,
        },
        {
          label: "Loader",
          path: "/loader",
          icon: <FontAwesomeIcon className="icon" icon={faSpinner} />,
        },
        {
          label: "Popup",
          path: "/popup",
          icon: <FontAwesomeIcon className="icon" icon={faWindowRestore} />,
        },
        {
          label: "Table",
          path: "/table",
          icon: <FontAwesomeIcon className="icon" icon={faTable} />,
        },
        {
          label: "SortIcon",
          path: "/sorticon",
          icon: <FontAwesomeIcon className="icon" icon={faSort} />,
        },
        {
          label: "Pagination",
          path: "/pagination",
          icon: <FontAwesomeIcon className="icon" icon={faListOl} />,
        },
        {
          label: "AlertMessage",
          path: "/alertmessage",
          icon: <FontAwesomeIcon className="icon" icon={faCommentAlt} />,
        },
        {
          label: "Tabs",
          path: "/tabs",
          icon: <FontAwesomeIcon className="icon" icon={faTable} />,
        },
        {
          label: "ExpandCollapse",
          path: "/expandcollapse",
          icon: <FontAwesomeIcon className="icon" icon={faDoorOpen} />,
        },
      ],
    },
    {
      label: "Form Components",
      icon: <FontAwesomeIcon className="icon" icon={faFileCode} />,
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

export default navOptions;
