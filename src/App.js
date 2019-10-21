import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    const response = await fetch('https://api.punkapi.com/v2/beers/');
    const data = await response.json();
    this.setState({beers: data});
  } 

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredBeer = this.state.beers.filter(beer => {
      return beer.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    if (!this.state.beers.length) {
      return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    } else {
      return (
        <div>
          <header>
            <h1>PUNK BEER</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
          </header>
          <div className="card-container">
            <CardList beers={filteredBeer}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
