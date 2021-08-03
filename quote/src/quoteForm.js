import React from 'react'


class QuoteForm extends React.Component {
  state = {
    author : this.props.author || '',
    content: this.props.content || ''
  }
  handleSubmit = () => {
    this.props.onFormSubmit({
      author: this.state.author,
      content: this.state.content
    })
  }
  render() {
    
    return (
      <div className='container pt-4'>
        <div className="mb-3">
          <label className="form-label">Quote Author</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Mark Twain" />
        </div>
        <div className="mb-3">
          <label className="form-label">Quote Content</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button 
          className='btn btn-success'
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <button 
          className='btn btn-warning'
          onClick={this.props.onFormClose}
        >
          Close
        </button>
      </div>
    )
  }
}

export default QuoteForm;
