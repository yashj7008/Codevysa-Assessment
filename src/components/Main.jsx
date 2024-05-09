import React from "react";
import { IoAdd, IoFilterOutline } from "react-icons/io5";
import { TiExportOutline } from "react-icons/ti";
import { productsData as products, matchesData } from "./Data";
import Pagination from "./Pagination";
import ProductTable from "./ProductTable";
import { useState } from "react";
import FilterBar from "./FilterBar";
import Header from "./Header";

const Main = () => {
  const [filterDiv, setFilterDiv] = useState(false);

  const handleClick = () => {
    setFilterDiv((prev) => !prev);
  };

  return (
    <div className="main">
      <Header />
      <section className="product-info">
        <div style={{ width: filterDiv ? "calc(100% - 300px)" : "100%" }}>
          <div className="matches">
            {matchesData.map((ele, index) => (
              <div className="match" key={ele.SrNo}>
                {ele.name}
              </div>
            ))}
          </div>
          <div className="features">
            <div>
              <p
                style={{
                  marginBottom: "5px",
                  fontWeight: "300",
                  color: "gray",
                  fontSize: "14px",
                }}
              >
                Search
              </p>
              <input type="text" placeholder="Search" />
            </div>
            <div className="filter">
              <div style={{ backgroundColor: "#a67149", color: "white" }}>
                <IoAdd /> <span>Add Products</span>
              </div>
              <div onClick={handleClick}>
                <IoFilterOutline /> <span>Filters</span>
              </div>
              <div>
                {" "}
                <TiExportOutline /> <span>Exports</span>
              </div>
            </div>
          </div>
          <div className="table">
            <ProductTable products={products} />
          </div>
        </div>
        {filterDiv && (
          <div style={{ width: "300px" }}>
            <FilterBar filterDiv={filterDiv} setFilterDiv={setFilterDiv} />
          </div>
        )}
      </section>
      <Pagination />
    </div>
  );
};

export default Main;
