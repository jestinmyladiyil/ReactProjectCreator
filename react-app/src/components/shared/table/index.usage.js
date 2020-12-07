import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";

class TableUsage extends Component {
  code = (
    <div>Your component usage should come here ..........................</div>
  );

  render() {
    return (
      <React.Fragment>
        <h1>Table</h1>
        <div>Add some description here</div>
        <br />
        <h3>Preview</h3>
        <div>{this.code}</div>
        <br />
        <h3>Usage</h3>
        <CodeHighlighter>{this.code}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default TableUsage;
