import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import AlertMessage from "./index";
import {
  addSuccessMessage,
  addErrorMessage,
  addWarningMessage,
  addInfoMessage,
  deleteAllMessages,
} from "./../../../store/messages";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

class AlertMessageUsage extends Component {
  componentDidMount() {
    this.props.addSuccessMessage("This is a success message!");
    this.props.addErrorMessage("This is a error message!");
    this.props.addWarningMessage("This is a warning message!");
    this.props.addInfoMessage("This is a info message!");
  }

  componentWillUnmount() {
    this.props.deleteAllMessages();
  }

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <h1>AlertMessage</h1>
        <br />
        <AlertMessage />
        <br />
        <h3>{t("usage")}</h3>
        <CodeHighlighter language="html">
          {`
<AlertMessage />
          `}
        </CodeHighlighter>
        <br />
        To configure alert messages to be displayed
        <CodeHighlighter language="js">
          {`
this.props.addSuccessMessage("This is a success message!");
this.props.addErrorMessage("This is a error message!");
this.props.addWarningMessage("This is a warning message!");
this.props.addInfoMessage("This is a info message!");
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ messages: state.messages });

export default connect(mapStateToProps, {
  addSuccessMessage,
  addErrorMessage,
  addWarningMessage,
  addInfoMessage,
  deleteAllMessages,
})(withTranslation()(AlertMessageUsage));
