import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks(){
    return this.props.stocks.map(thisStock=> <Stock key={thisStock.id} stock={thisStock} handleClick={this.props.addToPortfolio}/>)
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
