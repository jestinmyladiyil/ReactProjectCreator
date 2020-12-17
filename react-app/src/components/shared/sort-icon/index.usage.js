import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import SortIcon from ".";

class SortIconUsage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOrder: "asc",
    };
  }

  handleDataSort = (sortOrder) => {
    this.setState({
      sortOrder: sortOrder,
    });
  };

  code = (
    <SortIcon sortOrder="asc" sortMethod={this.handleDataSort}></SortIcon>
  );

  render() {
    return (
      <React.Fragment>
        <h1>SortIcon</h1>
        <div>Add some description here</div>
        <br />
        <h3>Preview</h3>
        <h5>Items ordered in {this.state.sortOrder} order</h5>
        <div>{this.code}</div>
        <br />
        <h3>Usage</h3>
        <br />
        Component configuration:
        <CodeHighlighter language="js">
          {`<SortIcon sortOrder="asc" // Initial sort order (asc/dsc), defaultValue : "asc"
          sortMethod={this.handleDataSort} // Method to handle sorting>
</SortIcon>`}
        </CodeHighlighter>
        <br />
        Sorting method:
        <CodeHighlighter language="js">
          {`handleDataSort = (sortOrder) => {
            //Logic goes here...
  };`}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default SortIconUsage;
