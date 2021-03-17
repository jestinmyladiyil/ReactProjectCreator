import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMessage } from "./../../../store/messages";

class AlertMessage extends Component {
  render() {
    const { messages, deleteMessage } = this.props;

    return (
      <React.Fragment>
        {messages && messages.length > 0 && (
          <div className="alert-messages">
            {messages.map((item, i) => {
              const { type } = item;
              let alertClasses = "success";
              let iconSrc = faCheckCircle;
              switch (type && type.toUpperCase()) {
                case "ERROR":
                  alertClasses = "error";
                  iconSrc = faTimesCircle;
                  break;
                case "WARNING":
                  alertClasses = "warning";
                  iconSrc = faInfoCircle;
                  break;
                case "INFO":
                  alertClasses = "info";
                  iconSrc = faInfoCircle;
                  break;
              }
              return (
                <div key={i} className={alertClasses}>
                  <FontAwesomeIcon icon={iconSrc} />
                  <span>{item.message}</span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => deleteMessage(i)}
                    className="close-icon"
                  />
                </div>
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

AlertMessage.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ messages: state.messages });

export default connect(mapStateToProps, { deleteMessage })(AlertMessage);
