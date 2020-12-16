import React, { Component } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ExpandCollapse extends Component {
  state = {
    collapse: this.props.collapse,
  };

  contentHeight;

  toggleExpandCollapse = () =>
    this.setState({ collapse: !this.state.collapse });

  render() {
    const { collapsible, children } = this.props;
    const { collapse } = this.state;

    return (
      <React.Fragment>
        {collapsible && (
          <div className="collapsible" onClick={this.toggleExpandCollapse}>
            {collapsible}
            {children && (
              <FontAwesomeIcon
                icon={collapse ? faAngleDown : faAngleUp}
                className="collapse-arrow"
              />
            )}
          </div>
        )}
        {children && (
          <div
            className="collapsible-content"
            style={{ maxHeight: collapse ? 0 : this.contentHeight }}
            ref={(ele) => (this.contentHeight = ele && ele.scrollHeight)}
          >
            {children}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ExpandCollapse;
