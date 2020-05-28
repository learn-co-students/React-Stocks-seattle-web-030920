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
      selectedStocks: [],
      display: [],
      checked: ""
    }
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({stocks: data, display:data}))
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

  sortStock=(event)=>{
    const value=event.target.value
    this.setState({checked: value})
    if(value==="Alphabetically"){
      this.setState((prev)=> ({display: prev.display.sort((a,b)=> a.name.localeCompare(b.name))}))
    }
    else if(value==="Price"){
      this.setState((prev)=> ({display: prev.display.sort((a,b)=> a.price-b.price)}))
    }
  }

  filterStock=(event)=>{
    const type=event.target.value
    const {stocks}=this.state
    if (type !=="All"){
    this.setState({display: stocks.filter(stock=> stock.type===type)}) 
    }
  }
  

  render() {
    const { selectedStocks, display } = this.state
    return (
      <div>
        <SearchBar onSetStockType={this.filterStock} onSortStock={this.sortStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={display} onBuyStock={this.buyStock}/>

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
