import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    noShowStocks: [],
    sorted: 0,
    filterValue: null,
    nextIndex: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(json => this.setState({stocks: json}))
  }

  onBuyStock = (thisStock) => {
    this.setState(prevState => {
      return {portfolio: [{...thisStock, id: prevState.nextIndex}, ...prevState.portfolio], nextIndex: prevState.nextIndex + 1  }
    })
  }

  onSellStock = (thisStock) => {
    this.setState(prevState => {
      let newPortfolio = prevState.portfolio.filter(stock => {
        return stock.id !== thisStock.id
      })
      return {portfolio: newPortfolio}
    })
  }

  onChangeSort = (sortId) => {
    this.setState(prevState => {

      let newStocks
      let newNoShowStocks

      if (sortId === 0) {
        newStocks = prevState.stocks.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          } else {
            return -1
          }
        })
        newNoShowStocks = prevState.noShowStocks.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          } else {
            return -1
          }
        })
      } else {
        newStocks = prevState.stocks.sort((a, b) => {
          if (a.price > b.price) {
            return 1
          } else {
            return -1
          }
        })
        newNoShowStocks = prevState.noShowStocks.sort((a, b) => {
          if (a.price > b.price) {
            return 1
          } else {
            return -1
          }
        })
      }

      return {stocks: newStocks, noShowStocks: newNoShowStocks, sorted: sortId}
    })
  }

  onChangeFilter = (filterValue) => {
    this.setState(prevState => {
      const noShowStocks = []
      const newStocks = [...prevState.stocks, ...prevState.noShowStocks].filter(stock => {
        if (stock.type === filterValue) {
          return stock
        } else if (filterValue === null) {
          return stock
        } else {
          noShowStocks.push(stock)
        }
      })
      return {noShowStocks: noShowStocks, stocks: newStocks, filterValue: filterValue}
    })
  }

  render() {

    const { stocks, portfolio, sorted } = this.state

    return (
      <div>
        <SearchBar sorted={sorted} onChangeSort={this.onChangeSort} onChangeFilter={this.onChangeFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} onBuyStock={this.onBuyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={portfolio} onSellStock={this.onSellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
