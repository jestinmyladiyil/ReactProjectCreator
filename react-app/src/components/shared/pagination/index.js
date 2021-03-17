import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

class Pagination extends Component {
  state = {
    currentPage: 1,
    pageSize: 10,
    startIndex: 1,
    endIndex: 10,
  };

  pageSizeOptions = [5, 10, 20, 50, 100];

  componentDidMount() {
    this.props.paginateOnLoad && this.navigateTo(1);
  }

  handlePageSizeChange = (event) => {
    this.setState({ pageSize: event.target.value }, () => this.navigateTo(1));
  };

  navigateTo = (currentPage) => {
    const { pageSize } = this.state;
    const { totalItems, onPaginate } = this.props;
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, totalItems);

    this.setState({ currentPage, startIndex, endIndex }, () => {
      onPaginate({ currentPage, pageSize, startIndex, endIndex });
    });
  };

  render() {
    const { totalItems, t } = this.props;
    const { currentPage, pageSize, startIndex, endIndex } = this.state;
    const totalPages = Math.ceil(totalItems / pageSize);

    return (
      <div className="pagination">
        <div className="section results">
          {t("showingPaginationResults", { startIndex, endIndex, totalItems })}
        </div>

        <div className="wrapper">
          <div className="section">
            <span style={{ paddingRight: "0.5rem" }}>{t("itemsPerPage")}</span>
            <select value={pageSize} onChange={this.handlePageSizeChange}>
              {this.pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="section total-pages">
            {t("showingPageNumber", { currentPage, totalPages })}
          </div>

          <div className="section">
            <a
              className={currentPage === 1 ? "disabled" : ""}
              onClick={() => currentPage !== 1 && this.navigateTo(1)}
            >
              {t("first")}
            </a>
            <a
              className={currentPage === 1 ? "disabled" : ""}
              onClick={() =>
                currentPage !== 1 && this.navigateTo(currentPage - 1)
              }
            >
              &lt;
            </a>
            <a className="active">{currentPage}</a>
            <a
              className={currentPage === totalPages ? "disabled" : ""}
              onClick={() =>
                currentPage !== totalPages && this.navigateTo(currentPage + 1)
              }
            >
              &gt;
            </a>
            <a
              className={currentPage === totalPages ? "disabled" : ""}
              onClick={() =>
                currentPage !== totalPages && this.navigateTo(totalPages)
              }
            >
              {t("last")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
  paginateOnLoad: PropTypes.bool,
};

export default withTranslation()(Pagination);
