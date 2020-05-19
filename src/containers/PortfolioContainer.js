import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = (portfolio, onSellStock) => {
    return portfolio.map(stock => {return <Stock key={stock.id} stock={stock} onHandleStock={onSellStock}/>})
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks(this.props.portfolio, this.props.onSellStock)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
