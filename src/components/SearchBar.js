import React from 'react';

const SearchBar = props => {
  const { onSelectChange, onSort } = props
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={onSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={onSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={onSelectChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
