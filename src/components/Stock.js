import React from 'react'

const Stock = ({stockInfo, onStockClick}) => {
  const {id, name, price, ticker, type} = stockInfo

  const handleClick = () => {
    onStockClick(stockInfo)
  }
  

  return (
      
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{
              name
            }</h5>
          <p className="card-text">{
              ticker
            }</p>
        </div>
      </div>


    </div>)
};

export default Stock
