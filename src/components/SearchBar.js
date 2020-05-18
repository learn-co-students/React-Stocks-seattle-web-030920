import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sorted === 0 ? true : false} onChange={() => props.onChangeSort(0)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sorted === 1 ? true : false} onChange={() => props.onChangeSort(1)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select selected={props.filterValue} onChange={(e) => props.onChangeFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
