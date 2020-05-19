import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = `http://localhost:3000/stocks`

class MainContainer extends Component {

  state = {stocks:[], showStocks: [], portfolio:[]}

  componentDidMount(){
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch(URL).then(res=>res.json()).then(allStocks => {this.setState({stocks: allStocks, showStocks:allStocks})})
  }

  buyStock = (boughtStock) => {
    if (!this.state.portfolio.includes(boughtStock))
    {this.setState(previous => {return {portfolio: [...previous.portfolio, boughtStock]}})}
  }

  sellStock = (soldStock) => {
    this.setState(previous => {return {portfolio:[...previous.portfolio.filter(stock => {return stock !== soldStock})]}})
  }

  sortStocks = (attribute) => {
    const local = this.state.stocks
    console.log(attribute)
    local.sort(this.compareValues(attribute))
    this.setState({stocks:local})
  }

  compareValues (key, order ="asc") {
    return function innerSort(a,b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
        return 0
      }

      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key]
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key]

      let comparison = 0
      if (varA > varB) {comparison = 1}
      else if (varA < varB) { comparison = -1}

      return ((order === 'desc') ? (comparison * -1) : comparison)
    }
  }

  filterByType = (type) => {
    const filter = type.target.value
    if (filter !== "All"){
      this.setState({showStocks:[...this.state.stocks.filter(stock => {
        if (stock.type === filter){return stock}
      } ) ] })
    }
    else{
      this.setState({showStocks:this.state.stocks})
    }
  }


  render() {
    return (
      <div>
        <SearchBar onSortStocks={this.sortStocks} onFilterByType={this.filterByType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.showStocks} onBuyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} onSellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
