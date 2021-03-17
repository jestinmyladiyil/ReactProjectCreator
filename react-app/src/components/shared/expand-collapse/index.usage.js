import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import ExpandCollapse from "./index";
import { withTranslation } from "react-i18next";

class ExpandCollapseUsage extends Component {
  code = (
    <ExpandCollapse collapse={true} collapsible={<h1>Click me!</h1>}>
      <p>
        Proident deserunt ut mollit proident do aute tempor excepteur veniam
        ipsum fugiat eu exercitation.
      </p>
    </ExpandCollapse>
  );

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <h1>ExpandCollapse</h1>
        <br />
        <h3>{t("preview")}</h3>
        {this.code}
        <br />
        <h3>{t("usage")}</h3>
        <CodeHighlighter language="html">
          {`
<ExpandCollapse
  collapse={true}
  collapsible={<h1>Click me!</h1>}
>
  <p> <!-- collapsible content -->
    Proident deserunt ut mollit proident do aute tempor excepteur veniam
    ipsum fugiat eu exercitation.
  </p>
</ExpandCollapse>
          `}
        </CodeHighlighter>
        <br />
        To configure if the content should be collapsed on load
        <CodeHighlighter language="js">{`collapse={true}`}</CodeHighlighter>
        <br />
        The toggle element can be passed via props as
        <CodeHighlighter language="html">{`collapsible={<h1>Click me!</h1>}`}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ExpandCollapseUsage);
