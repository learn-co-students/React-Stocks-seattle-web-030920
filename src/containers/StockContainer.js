import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  renderStocks = () => {
    const {stocks, addStock} = this.props 
    return stocks.map(stock => <Stock key={stock.id} stockInfo={stock} onStockClick={addStock}/>)
  }
  

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
