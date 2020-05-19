import React from 'react';

const SearchBar = ({sortByAlpha, sortByType, sortByPrice, checked, sortByNone}) => {

  const handleAlpha = () => {
    sortByAlpha()
  }
  
  const handleType = (event) => {
    sortByType(event.target.value)
  }

  const handlePrice = () => {
    sortByPrice()
  }

  const handleAll = () => {
    sortByNone()
  }
  

  return ( 
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={checked==="alpha"} onChange={handleAlpha}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={checked==="price"} onChange={handlePrice}/>
        Price
      </label>
      <label>
        <input type="radio" value="All" checked={checked==="all"} onChange={handleAll}/>
        None
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
