import React from 'react';

const SearchBar = ({onSortStocks, onFilterByType}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" id="sort1" value="Alphabetically" checked={null} onChange={()=>{onSortStocks("name")}}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" id="sort2" value="Price" checked={null} onChange={()=>{onSortStocks("price")}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={onFilterByType}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
