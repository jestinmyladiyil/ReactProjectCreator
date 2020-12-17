import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Pagination from ".";

class PaginationUsage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalItems: 95,
      currentPage: 1,
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  code = (<div></div>);

  render() {
    return (
      <React.Fragment>
        <h1>Pagination</h1>
        <div>Add some description here</div>
        <br />
        <h3>Preview</h3>
        <div>
          <h4>Items displayed from page {this.state.currentPage}</h4>
          <Pagination
            totalItems={this.state.totalItems}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
        <br />
        <h3>Usage</h3>
        <br />
        Component configuration:
        <CodeHighlighter language="js">
          {`<Pagination
            totalItems=95 // Total number of items
            currentPage=1 // Initial page to be displayed
            rowCountDifference=5 // Differences between values in 'Rows per page' dropdown. (Optional : 5 is default)
            onPageChange={this.handlePageChange} // Method to handle page navigation
></Pagination>`}
        </CodeHighlighter>
        <br />
        Page navigation method :
        <CodeHighlighter language="js">
          {`handlePageChange = (page) => {
    //Logic goes here...
  };`}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default PaginationUsage;
