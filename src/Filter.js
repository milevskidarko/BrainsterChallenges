import React from "react";
import { filterList } from "./Data";

class Filter extends React.Component {
  render() {
    let filterData = {
      brands: {},
      gender: {},
    };
    for (let i = 0; i < this.props.allcards.length; i++) {
      if (filterData.brands[this.props.allcards[i].brand] === undefined) {
        filterData.brands[this.props.allcards[i].brand] = 1;
      } else {
        filterData.brands[this.props.allcards[i].brand]++;
      }

      if (filterData.gender[this.props.allcards[i].gender] === undefined) {
        filterData.gender[this.props.allcards[i].gender] = 1;
      } else {
        filterData.gender[this.props.allcards[i].gender]++;
      }
    }
    return (
      <div className="col mx-2">
        <h2>Filter by:</h2>
        <div className="row mt-3">
          <div className="col border border-left-0 border-right-0">
            <ul className="navbar-nav">
              <li
                className={
                  "text-uppercase listNav" +
                  (Object.keys(this.props.filters).length === 0
                    ? " active"
                    : "")
                }
                onClick={() => this.props.setFilter({})}
              >
                Show All
                <span className="badge1 float-right bg-light rounded-pill px-3">
                  {this.props.allcards.length}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col border border-left-0 border-right-0 border-top-0">
            <h2 className="py-3">Gender</h2>
            <ul className="navbar-nav m-auto">
              {filterList[0].map((el, index) => (
                <li
                  className={
                    "text-uppercase listNav" +
                    (this.props.filters &&
                    this.props.filters.gender &&
                    this.props.filters.gender === el
                      ? " active"
                      : "")
                  }
                  key={index}
                  onClick={() =>
                    this.props.setFilter(
                      Object.assign({
                        ...this.props.filters,
                        ...{ gender: el },
                      })
                    )
                  }
                >
                  {el}
                  <span className="badge2 float-right bg-light rounded-pill px-3">
                    {filterData.gender[el]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col border border-left-0 border-right-0 border-top-0 px-0">
          <h2 className="py-3">Brand</h2>
          <ul className="navbar-nav">
            {filterList[1].map((el, index) => (
              <li
                className={
                  "text-uppercase listNav" +
                  (this.props.filters &&
                  this.props.filters.brand &&
                  this.props.filters.brand === el
                    ? " active"
                    : "")
                }
                key={index}
                onClick={() =>
                  this.props.setFilter(
                    Object.assign({
                      ...this.props.filters,
                      ...{ brand: el },
                    })
                  )
                }
              >
                {el}
                <span className="badge4 float-right bg-light rounded-pill px-3">
                  {filterData.brands[el]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
