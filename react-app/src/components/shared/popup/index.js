import React, { Component } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Popup extends Component {
  state = {};
  render() {
    const {
      header,
      children,
      footer,
      onPrimaryBtnClick,
      onClose,
      primaryBtnLabel,
      secondaryBtnLabel,
      size, // top, bottom, right, left, top-right, top-left, bottom-right, bottom-left
      position, // small, medium, large, xlarge
    } = this.props;
    return (
      <div className="glasspane">
        <div className={`modal ${size} ${position}`}>
          <div className="modal-header">
            {header}
            <FontAwesomeIcon icon={faTimes} onClick={onClose} />
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {footer || (
              <React.Fragment>
                <button onClick={onClose}>
                  {secondaryBtnLabel || "Cancel"}
                </button>
                <button className="primary" onClick={onPrimaryBtnClick}>
                  {primaryBtnLabel || "Save"}
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
