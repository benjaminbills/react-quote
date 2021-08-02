import './App.css';

import React from 'react'

class App extends React.Component {
  state = {
    quotes: [],
  };
  componentDidMount() {
    this.getQuotesFromServer();
  }
  getQuotesFromServer =() => {
    const baseURL = 'http://127.0.0.1:8000/quote/'
    fetch(baseURL)
    .then((res) => res.json())
    .then((quotes) => {
      this.setState({quotes: quotes})
      console.log(quotes);
    })
  }
  render() {
    return (
      <div>
        Working
      </div>
    )
  }
}

export default App;
