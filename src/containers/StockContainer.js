import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  renderStocks = (stocks, onBuyStock) => {
    return stocks.map(stock => {return <Stock key={stock.id} stock={stock} onHandleStock={onBuyStock}/>})
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks(this.props.stocks, this.props.onBuyStock)
        }
      </div>
    );
  }

}

export default StockContainer;
