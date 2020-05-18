import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  populateStocks = () => {
    let i = -1
    return this.props.stocks.map(stock => {
      i++
      return <Stock stock={stock} key={`stock_${i}`} onChangeStock={this.props.onBuyStock} />
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.populateStocks()}
      </div>
    );
  }

}

export default StockContainer;
