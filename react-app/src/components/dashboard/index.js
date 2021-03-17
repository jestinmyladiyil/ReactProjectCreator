import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Dashboard extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return <h1>{t("This is your home page!")}</h1>;
  }
}

export default withTranslation()(Dashboard);
