import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";

class PaginationUsage extends Component {
  code = (
    <div>Your component usage should come here ..........................</div>
  );

  render() {
    return (
      <React.Fragment>
        <h1>Pagination</h1>
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

export default PaginationUsage;
