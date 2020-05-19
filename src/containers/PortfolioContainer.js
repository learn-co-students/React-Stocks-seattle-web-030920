import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  

  renderPortfolio = () => {
    const {portfolio, sellStock} = this.props 
    return portfolio.map(stock => <Stock key={stock.id} stockInfo={stock} onStockClick={sellStock}/>)
  }
  

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
