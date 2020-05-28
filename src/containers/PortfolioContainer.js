import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderStocks = () => {
    const { selectedStocks, onSellStock } = this.props
    return selectedStocks.map(stock => {
      return <Stock stock={stock} key={stock.id} onHandleClick={() => onSellStock(stock)}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
