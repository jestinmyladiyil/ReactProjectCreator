import React, { Component } from "react";
import Prism from "prismjs";
import jsxToString from "jsx-to-string";
import { isString, isObject } from "../../../utilities/utils";

class CodeHighlighter extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0);
  }

  render() {
    const { language, children } = this.props;
    let classes = `language-${language ? language : "html"}`;
    let codeToHighlight = null;
    if (isString(children)) {
      codeToHighlight = children.trim();
    } else if (isObject(children)) {
      if ("js" === language) {
        codeToHighlight = JSON.stringify(children, null, 2);
      } else {
        codeToHighlight = jsxToString(children);
      }
    }

    return (
      <pre className="line-numbers">
        <code className={classes}>{codeToHighlight}</code>
      </pre>
    );
  }
}

export default CodeHighlighter;
