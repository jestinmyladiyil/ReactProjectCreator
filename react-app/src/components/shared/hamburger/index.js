import React, { Component } from "react";

class Hamburger extends Component {
  state = {
    isClose: false,
  };

  toggle = () => {
    const isClose = !this.state.isClose;
    this.setState({ isClose });
    this.props.onChange(isClose);
  };

  render() {
    const { isClose } = this.state;
    const { className } = this.props;
    let hamburgerClasses = `hamburger ${className} ${isClose ? "close" : ""}`;

    return (
      <div className={hamburgerClasses} onClick={this.toggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    );
  }
}

export default Hamburger;
