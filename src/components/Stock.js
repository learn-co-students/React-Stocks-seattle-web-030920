import React from 'react'

const Stock = ({stock, onHandleClick}) => (

  <div onClick={(stock) => onHandleClick(stock)}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {stock.name}
        </h5>
        <p className="card-text">
          {stock.ticker}: {stock.price}
          </p>
      </div>
    </div>
  </div>
);

export default Stock

// class component function
// handleClick = () => {
  
// }

// this.handleClick - wont run till clicked
// this.onchange() - will run automatically 
// functional component

// const handleClick = () => {

// }


// anonomys function 
// () => {

// }
// allows us to pass a argument in && not run the function/action till clicked 
