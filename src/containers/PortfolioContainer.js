import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderStocks = () => {
    const { stocks, onSellStock } = this.props
    return stocks.map((stock) => {
      return <Stock key={stock.index} stockInfo={stock} onClickStock={onSellStock} />
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
