import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
 
  state = {
    original: [],
    stocks: [],
    displayed: [],
    portfolio: [],
    checked: "",
    nextIndex: 0
  }

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(stocks => this.setState({original: stocks, stocks: stocks, displayed: stocks}))
  }

  addStock = (stock) => {
    stock.idx = this.state.nextIndex
    this.setState(prev => ({portfolio: [...prev.portfolio, {...stock}], nextIndex: prev.nextIndex + 1}))
  }
  
  sellStock = (soldStock) =>{
    this.setState(prev => ({portfolio: prev.portfolio.filter(stock => stock.idx != soldStock.idx)}))
  }

  sortByAlpha = () => {
    this.setState(prev => {
      return {
        displayed: prev.displayed.sort((a, b) => {
          return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        }),
        checked: "alpha"
      }
    })
  }

  sortByPrice = () => {
    this.setState(prev => {
      return {
        displayed: prev.displayed.sort((a, b) => {
          return (a.price > b.price) ? -1 : (a.price < b.price) ? 1 : 0
        }),
        checked: "price"
      }
    })
  }

  sortByType = (type) => {
    this.setState(prev => ({displayed: prev.stocks.filter(stock => stock.type === type), checked: ''}))
  }

  sortByNone = () => {
    this.setState({displayed: this.state.original, checked: "all"})
  }
  
  

  render() {
    const {stocks, portfolio, checked, displayed} = this.state
    return (
      <div>
        <SearchBar sortByAlpha={this.sortByAlpha} sortByPrice={this.sortByPrice} sortByType={this.sortByType} sortByNone={this.sortByNone} checked={checked}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayed} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
