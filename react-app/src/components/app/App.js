import { HashRouter, Route, Redirect } from "react-router-dom";
import Header from "./../shared/header";
import Dashboard from "./../dashboard";
import HeaderUsage from "./../shared/header/index.usage";
import SideNavUsage from "./../shared/side-nav/index.usage";
import LoaderUsage from "./../shared/loader/index.usage";
import PopupUsage from "./../shared/popup/index.usage";
import TableUsage from "./../shared/table/index.usage";
import SortIconUsage from "./../shared/sort-icon/index.usage";
import PaginationUsage from "./../shared/pagination/index.usage";
import AlertMessageUsage from "./../shared/alert-message/index.usage";
import TabsUsage from "./../shared/tabs/index.usage";
import ExpandCollapseUsage from "./../shared/expand-collapse/index.usage";
import navOptions from "./navOptions";

function App() {
  const { logo, menu, settings } = navOptions;
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header logo={logo} menu={menu} settings={settings} />
      {/* <SideNav logo={logo} menu={menu} settings={settings} /> */}
      <div className="container">
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/header" component={HeaderUsage} />
        <Route path="/sidenav" component={SideNavUsage} />
        <Route path="/loader" component={LoaderUsage} />
        <Route path="/popup" component={PopupUsage} />
        <Route path="/table" component={TableUsage} />
        <Route path="/sorticon" component={SortIconUsage} />
        <Route path="/pagination" component={PaginationUsage} />
        <Route path="/alertmessage" component={AlertMessageUsage} />
        <Route path="/tabs" component={TabsUsage} />
        <Route path="/expandcollapse" component={ExpandCollapseUsage} />
        <Redirect to="/dashboard" />
      </div>
    </HashRouter>
  );
}

export default App;
