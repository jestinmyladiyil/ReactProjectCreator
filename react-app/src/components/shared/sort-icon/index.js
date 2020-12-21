import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

class SortIcon extends Component {
  render() {
    const { order, onSort } = this.props;
    let icon = !order ? faSort : order === "asc" ? faSortUp : faSortDown;

    return (
      <FontAwesomeIcon
        icon={icon}
        className="sort-icon"
        onClick={() => {
          const newOrder = !order ? "asc" : order === "asc" ? "desc" : "asc";
          onSort(newOrder);
        }}
      />
    );
  }
}

SortIcon.propTypes = {
  order: PropTypes.string,
  onSort: PropTypes.func.isRequired,
};

export default SortIcon;
