import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

class SortIcon extends Component {
  render() {
    const { order, onSort } = this.props;
    let icon = !order ? faSort : order === "asc" ? faSortUp : faSortDown;

    return (
      <FontAwesomeIcon
        icon={icon}
        onClick={() => {
          const newOrder = !order ? "asc" : order === "asc" ? "desc" : "asc";
          onSort(newOrder);
        }}
      />
    );
  }
}

export default SortIcon;
