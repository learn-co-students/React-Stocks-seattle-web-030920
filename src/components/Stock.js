import React from 'react'

const handleStock = (stock, onHandleStock) => {
  onHandleStock(stock)
}

const Stock = ({stock, onHandleStock}) => {

  let {id, name, price, ticker, type} = stock

  return (
    <div className="card" onClick={() => handleStock(stock, onHandleStock)}>
      <div className="card-body">
        <h5 className="card-title">
          {name}
        </h5>
        <p className="card-text">
          {ticker}: ${price}
          </p>
      </div>
    </div>
  )
};

export default Stock
