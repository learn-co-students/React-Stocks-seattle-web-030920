import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const API = 'http://localhost:3000/stocks'
class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      selectedStocks: []
    }
  }

  componentDidMount() {
      fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({stocks: data}))
  }

  stockStatus = (stock) => {
    return this.state.selectedStocks.includes(stock)
  }

  // check the stock status condition
  buyStock = (stock) => {
      this.setState(prev => {
        return {selectedStocks:[...prev.selectedStocks, stock]}
      })
  }

  sellStock = (currentStock) => {
    this.setState({selectedStocks: this.state.selectedStocks.filter((stock) => { 
      return stock !== currentStock
      })
    })
  }

  render() {
    const { stocks, selectedStocks } = this.state
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} onBuyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer selectedStocks={selectedStocks} onSellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
