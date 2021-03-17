import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Loader from "./index";
import SmallLoader from "./smallLoader";
import { showLoader, hideLoader } from "./../../../store/loading";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

class LoaderUsage extends Component {
  componentDidMount() {
    this.props.showLoader();
  }

  componentWillUnmount() {
    this.props.hideLoader();
  }

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <h1>Loader</h1>
        <br />
        <h3>{t("preview")} (Full Page Loader)</h3>
        <div className="viewport">
          <Loader />
        </div>
        <br />
        <h3>{t("usage")} (Full Page Loader)</h3>
        <CodeHighlighter language="html">
          {`
<Loader />
          `}
        </CodeHighlighter>
        <CodeHighlighter language="js">
          {`
this.props.showLoader();
this.props.hideLoader();
          `}
        </CodeHighlighter>
        <br />
        <br />
        <h3>{t("preview")} (Small Loader)</h3>
        <SmallLoader show={true} />
        <br />
        <h3>{t("usage")} (Small Loader)</h3>
        <CodeHighlighter language="html">
          {`
<SmallLoader show={true} />
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ loading: state.loading });

export default connect(mapStateToProps, { showLoader, hideLoader })(
  withTranslation()(LoaderUsage)
);
