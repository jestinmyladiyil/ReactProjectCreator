import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    super(props);

    const { tabsConfig, defaultActiveIndex } = this.props;
    const activeIndexOnLoad =
      defaultActiveIndex &&
      defaultActiveIndex < tabsConfig.length &&
      defaultActiveIndex >= 0
        ? defaultActiveIndex
        : 0;

    this.state = {
      activeIndex: activeIndexOnLoad,
    };
  }

  componentDidMount() {
    const { tabsConfig, callTabChangeOnLoad } = this.props;
    const { activeIndex } = this.state;
    callTabChangeOnLoad &&
      this.handleTabChange(tabsConfig[activeIndex], activeIndex);
  }

  handleTabChange = (item, index) => {
    const { onTabChange } = this.props;
    this.setState({ activeIndex: index });
    onTabChange(item, index);
  };

  render() {
    const { tabsConfig, direction } = this.props;
    const { activeIndex } = this.state;
    const activeTab = tabsConfig[activeIndex];

    return (
      <div
        className={`tabs ${
          direction && "y" === direction.toLowerCase() ? "y" : "x"
        }`}
      >
        {tabsConfig && tabsConfig.length > 0 && (
          <React.Fragment>
            <div className="head">
              {tabsConfig.map((item, index) => (
                <div
                  key={index}
                  className={`tab ${activeIndex === index ? "active" : ""}`}
                  onClick={() =>
                    activeIndex !== index && this.handleTabChange(item, index)
                  }
                >
                  {item.head}
                </div>
              ))}
            </div>
            {<div className="body">{activeTab.body}</div>}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Tabs;
