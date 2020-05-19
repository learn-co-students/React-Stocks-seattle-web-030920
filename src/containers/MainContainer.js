import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks:[],
    portfolio: [],
    display:[],
    index: 1,
    checked:""
  }

  componentDidMount(){
    fetch(" http://localhost:3000/stocks").then(res=>res.json()).then(res=> this.setState({stocks: res, display: res}))
  }

  addToPortfolio=(stock)=> {
    this.setState(prev=> {
      return {portfolio: [...prev.portfolio, {...stock, index:prev.index+1}], index: prev.index+1}})
  }

  sellStock=(stock)=>{
    this.setState(prev=> {
      return {portfolio: prev.portfolio.filter(thisStock=> thisStock.index !== stock.index)}
    })
  }

  onChange=(event)=>{
    const value=event.target.value
    this.setState({checked: value})
    if(value==="Alphabetically"){
      this.setState((prev)=> ({display: prev.display.sort((a,b)=> a.name.localeCompare(b.name))}))
    }
    else if(value==="Price"){
      this.setState((prev)=> ({display: prev.display.sort((a,b)=> a.price-b.price)}))
    }
  }

  onFilter=(event)=>{
    const type=event.target.value
    const {stocks}=this.state
    if (type !=="All"){
    this.setState({display: stocks.filter(stock=> stock.type===type)}) 
    }
  }

  render() {
    const {portfolio, checked, display}=this.state
    return (
      <div>
        <SearchBar onChange={this.onChange} onFilter={this.onFilter} checked={checked}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={display} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
