import React, { Component } from "react";
import PropTypes from "prop-types";

class SmallLoader extends Component {
  render() {
    const { show } = this.props;
    return (
      <React.Fragment>
        {show && <div className="spinner small"></div>}
      </React.Fragment>
    );
  }
}

SmallLoader.propTypes = { show: PropTypes.bool };

export default SmallLoader;
