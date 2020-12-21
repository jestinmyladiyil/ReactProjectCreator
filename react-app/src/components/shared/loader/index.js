import React, { Component } from "react";
import PropTypes from "prop-types";

class Loader extends Component {
  state = {};
  render() {
    const { show, showFull } = this.props;
    return (
      <React.Fragment>
        {showFull && (
          <div className="glasspane">
            <div className="spinner large"></div>
          </div>
        )}
        {show && <div className="spinner small"></div>}
      </React.Fragment>
    );
  }
}

Loader.propTypes = {
  showFull: PropTypes.bool,
  show: PropTypes.bool,
};

export default Loader;
