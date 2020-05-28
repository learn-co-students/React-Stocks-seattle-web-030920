import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  renderStocks = () => {
    const { stocks, onBuyStock } = this.props
    return stocks.map(stock => {
      return <Stock stock={stock} key={stock.id + 1} onHandleClick={() => onBuyStock(stock)}/>
    })
}

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }
}

export default StockContainer;
