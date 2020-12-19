import React, { Component } from "react";
import SortIcon from "./../sort-icon/index";

class Table extends Component {
  state = {
    sortedField: null,
  };

  componentDidMount() {
    const { sortInit } = this.props;
    if (sortInit) {
      const { key, order } = sortInit;
      this.handleSort(key, order);
    }
  }

  handleSort = (key, order) => {
    const { onSort } = this.props;
    this.setState({ sortedField: { key, order } });
    onSort(key, order);
  };

  render() {
    const { dataList, mapping } = this.props;
    const keys = Object.keys(mapping);
    const { sortedField } = this.state;
    const { key: sortedKey, order: sortedOrder } = sortedField || {};

    return (
      <table>
        <thead>
          <tr>
            {keys.map((key) => (
              <td>
                {mapping[key].heading}
                {mapping[key].sort && (
                  <SortIcon
                    order={key === sortedKey ? sortedOrder : null}
                    onSort={(order) => this.handleSort(key, order)}
                  />
                )}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList.map((data) => (
            <tr>
              {keys.map((key) => (
                <td>
                  {mapping[key].renderField
                    ? mapping[key].renderField(data[key])
                    : data[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
