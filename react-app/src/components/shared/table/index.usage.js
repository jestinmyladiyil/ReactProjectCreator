import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Table from "./index";

class TableUsage extends Component {
  dataList = [
    {
      id: 1,
      firstName: "Mounish Kumar",
      lastName: "V",
      email: "mounish@example.com",
      phone: "99999 99999",
      address: "Perumbakkam",
    },
    {
      id: 2,
      firstName: "Deepan",
      lastName: "V",
      email: "deeps@example.com",
      phone: "99999 99999",
      address: "Madipakkam",
    },
    {
      id: 3,
      firstName: "Shan",
      lastName: "M",
      email: "shan@example.com",
      phone: "99999 99999",
      address: "Velacherry",
    },
  ];

  mapping = {
    id: {
      heading: "ID", // Mandatory (String or JSX)
      sort: true, // Optional (false bu default)
      renderField: (value) => value, // Optional (Method should return String or JSX)
      hideInMobile: true, // Optional (false by default)
    },
    firstName: { heading: "First Name", sort: true },
    lastName: { heading: "Last Name", sort: true },
    email: { heading: "Email", sort: true },
    phone: { heading: "Phone", sort: true },
    address: { heading: "Address", sort: true },
  };

  sortInit = { key: "id", order: "desc" };

  handleSort = (key, order) => {
    console.log("Sort by '" + key + "' in " + order);
  };

  code = (
    <Table
      dataList={this.dataList}
      mapping={this.mapping}
      sortInit={this.sortInit}
      onSort={this.handleSort}
    />
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
