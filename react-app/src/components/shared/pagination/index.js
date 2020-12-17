import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      startIndex: 1,
      endIndex: 10,
      rowCountDifference: props.rowCountDifference,
    };
  }

  validateIndex = (index) => index >= 0 && index <= this.props.totalItems;

  changeRowsPerPage = (event) => {
    this.setState(
      {
        pageSize: Number(event.target.value),
      },
      () => {
        this.navigatePage(1);
      }
    );
  };

  navigatePage = (pageNumber) => {
    this.setState((prevState) => ({
      startIndex: (pageNumber - 1) * prevState.pageSize + 1,
      endIndex: Math.min(
        pageNumber * prevState.pageSize,
        this.props.totalItems
      ),
    }));
    this.props.onPageChange(pageNumber);
  };

  render() {
    const { totalItems, currentPage } = this.props;
    const {
      pageSize,
      startIndex,
      endIndex,
      rowCountDifference = 5,
    } = this.state;
    const pagesCount = Math.ceil(totalItems / pageSize);
    let rowCountsList = [];
    for (var counter = 1; counter < 20; counter++) {
      rowCountsList.push(counter * rowCountDifference);
    }
    return (
      <React.Fragment>
        <div className="pagination">
          <span>Rows per page: </span>
          <span>
            <select
              id="rowCountSelector"
              onChange={this.changeRowsPerPage}
              className="page-link"
              defaultValue="10"
            >
              {rowCountsList.map((rowCountValue) => (
                <option value={rowCountValue}>{rowCountValue}</option>
              ))}
            </select>
          </span>
          <span className="page-item">
            Page {currentPage} of {pagesCount}
          </span>
          <span>
            Displaying {startIndex} to {endIndex} items of {totalItems}
          </span>
          {pagesCount !== 1 ? (
            <div>
              <a
                className="page-link"
                onClick={() => currentPage !== 1 && this.navigatePage(1)}
              >
                &laquo;
              </a>
              <a
                className="page-link"
                onClick={() =>
                  currentPage !== 1 && this.navigatePage(currentPage - 1)
                }
              >
                &lt;
              </a>
              <a className="page-item">{currentPage}</a>
              <a
                className="page-link"
                onClick={() =>
                  currentPage !== pagesCount &&
                  this.navigatePage(currentPage + 1)
                }
              >
                &gt;
              </a>
              <a
                className="page-link"
                onClick={() =>
                  currentPage !== pagesCount && this.navigatePage(pagesCount)
                }
              >
                &raquo;
              </a>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Pagination;
