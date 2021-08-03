import React from 'react'
import QuoteForm from './quoteForm';


class ToggleableQuoteForm extends React.Component {
  state = {
    isOpen: false
  }
  handleFormOpen = () => {
    this.setState({isOpen:true})
  }
  handleFormClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    if(this.state.isOpen) {
      return (
        <div>
          <QuoteForm 
            onFormClose={this.handleFormClose}
          />
        </div>
      )
    } else {
      return (
        <div className='container pt-4 text-center'>
          <button onClick={this.handleFormOpen}>+</button>
        </div>
      )
    }
  }
}

export default ToggleableQuoteForm;