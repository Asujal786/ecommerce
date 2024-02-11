import React, { useState } from "react";

function Filter(props) {
  const [Categories, SetCategories] = useState("");
  const [Sort, SetSort] = useState("");

  function handleFilter() {}

  return (
    <div>
      <div className="filterbox">
        <div className="filter-categories">
          <label> Categories : </label>
          <select  className="select">
            <option
              onSelect={() => {
                SetCategories("All");
              }}
              value={"All"}
            >
              {" "}
              All{" "}
            </option>
            <option
              onSelect={() => {
                SetCategories("Tops");
              }}
              value={"tops"}
            >
              {" "}
              Tops{" "}
            </option>
            <option
              onSelect={() => {
                SetCategories("bottom");
              }}
              value={"bottom"}
            >
              {" "}
              Bottom{" "}
            </option>
            <option
              onSelect={() => {
                SetCategories("footwear");
              }}
              value={"footwear"}
            >
              {" "}
              Footwear{" "}
            </option>
            <option
              onSelect={() => {
                SetCategories("accessories");
              }}
              value={"accessories"}
            >
              {" "}
              Accessories{" "}
            </option>
          </select>
        </div>
        <div className="sort">
          <label>Sort by : </label>
          <select className="select">
            <option
              onSelect={() => {
                SetSort("lowToHigh");
              }}
              value={"lowToHigh"}
            >
              Low to High
            </option>
            <option
              onSelect={() => {
                SetSort("highToLow");
              }}
              value={"highToLow"}
            >
              High to Low
            </option>
          </select>
        </div>
        <div className="apply">
          <button onClick={handleFilter} className="btn btn-primary">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
