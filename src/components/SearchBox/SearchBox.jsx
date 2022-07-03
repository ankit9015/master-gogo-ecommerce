import React from "react";

const Searchbox = () => {
    return <div className="search-box flex-row">
    <i className="fa fa-search" aria-hidden="true"></i>
    <input className="search-input" type="search" name="product-search" id="product-search" placeholder="Search"></input>
</div>
}

export default Searchbox;