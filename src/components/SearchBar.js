import React from 'react';

const SearchBar = ({onSetStockType, onSortStock, checked}) => {
  const handleChange = (event) => {
    onSetStockType(event)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={checked==="Alphabetically"} onChange={(event)=> onSortStock(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={checked==="Price"} onChange={(event)=> onSortStock(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleChange(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
