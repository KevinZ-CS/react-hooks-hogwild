import React from "react";

function Filter({ greaseFilter, setGreaseFilter, setSortBy }) {

    function handleChange(e) {
       setSortBy(e.target.value)
    }
         
    return (
        <div>
        <div>Only greased: <input type='checkbox' id="filter" checked={greaseFilter} onChange={(e) => setGreaseFilter(e.target.checked)} /> </div>
        <select onChange={handleChange}>
            <option></option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select> 
      </div>)
}

export default Filter