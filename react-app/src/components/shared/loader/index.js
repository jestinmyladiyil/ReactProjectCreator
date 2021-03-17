import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Loader extends Component {
  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        {loading && (
          <div className="glasspane">
            <div className="spinner large"></div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Loader.propTypes = { loading: PropTypes.bool };

const mapStateToProps = (state) => ({ loading: state.loading });

export default connect(mapStateToProps)(Loader);
