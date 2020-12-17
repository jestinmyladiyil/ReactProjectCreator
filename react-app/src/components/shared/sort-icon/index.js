import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

class SortIcon extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      sortOrder: props.sortOrder,
    };
  }

  renderSortIcon = () => {
    const { sortOrder = "asc" } = this.state;
    if ("asc" === sortOrder) return <FontAwesomeIcon icon={faSortUp} />;
    return <FontAwesomeIcon icon={faSortDown} />;
  };

  toggleSortIcon = () => {
    this.setState((prevState) => ({
      sortOrder: "asc" === prevState.sortOrder ? "dsc" : "asc",
    }));
  };

  render() {
    const { sortMethod } = this.props;
    return (
      <React.Fragment>
        <div>
          <span onClick={this.toggleSortIcon}>{this.renderSortIcon()}</span>
        </div>
        {sortMethod(this.state.sortOrder)}
      </React.Fragment>
    );
  }
}

export default SortIcon;
