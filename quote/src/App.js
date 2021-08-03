import './App.css';

import React from 'react'
import QuoteList from './quoteList';
import ToggleableQuoteForm from './toggleableQuoteForm';
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
  handleDeleteClick = (quoteId) => {
    this.deleteQuote(quoteId);
  }
  deleteQuote =(quoteId) => {
    this.setState({
      quotes: this.state.quotes.filter(q => q.id !== quoteId),
    });
    const baseURL = `http://127.0.0.1:8000/quote/${quoteId}`
    fetch(baseURL, {
      method: 'DELETE'
    })
  }
  render() {
    return (
      <div className="container pt-4">
        <QuoteList
          quotes={this.state.quotes}
          onDeleteQuote={this.handleDeleteClick}
        />
        <ToggleableQuoteForm />
      </div>
    )
  }
}

export default App;
