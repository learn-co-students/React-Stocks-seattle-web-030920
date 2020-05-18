import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  populatePortfolio = () => {
    let i = -1
    return this.props.portfolio.map(stock => {
      i++
      return <Stock stock={stock} key={`portfolio_${i}`} onChangeStock={this.props.onSellStock} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.populatePortfolio()}
      </div>
    );
  }

}


export default PortfolioContainer;
