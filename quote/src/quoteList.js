import React from 'react'
import Quote from './quote';

class QuoteList extends React.Component {

  render() {
    const quotes = this.props.quotes.map((quote) => (
      <Quote
        key={quote.id}
        id={quote.id}
        author={quote.author}
        content={quote.content}
        onDeleteQuote={this.props.onDeleteQuote}
      />
    ))
    return (
      <div id='quotes'>
        {quotes}
        
      </div>
    )
  }
}

export default QuoteList;
