import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    allStocks: [],
    portfolioStocks: [],
    selectedStocks: [],
    nextIndex: 0
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(stocks => this.setState({
      allStocks: stocks,
      selectedStocks: stocks
    }))
  }

  buyStock = stock => {
    this.setState(prev => {
      return {
        portfolioStocks: [...prev.portfolioStocks, {...stock, index: this.state.nextIndex}],
        nextIndex: prev.nextIndex + 1
      }
    })
  }

  sellStock = stock => {
    this.setState(prev => {
      return {portfolioStocks: prev.portfolioStocks.filter(aStock => {
        return aStock.index !== stock.index
      })}
    })
  }

  handleSelect = event => {
    const type = event.target.value
    this.setState(prev => {
      return {selectedStocks: prev.allStocks.filter(stock => stock.type === type)}
    })
  }

  handleSort = event => {
    let newArr = []
    if (event.target.value === "Alphabetically") {
      newArr = this.state.selectedStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (event.target.value === "Price") {
      newArr = this.state.selectedStocks.sort((a,b) => a.price > b.price ? 1 : -1)
    }
    this.setState({selectedStocks: newArr})
  }

  render() {
    return (
      <div>
        <SearchBar onSelectChange={this.handleSelect} onSort={this.handleSort} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.selectedStocks} onBuyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} onSellStock={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
