import React from 'react'


class Quote extends React.Component {
  handleDelete = () => {
    this.props.onDeleteQuote(this.props.id)
  }
  render() {
    return (
      <div>
        <figure>
          <blockquote className="blockquote">
            <p>{this.props.content}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">{this.props.author}</cite>
          </figcaption>
        </figure>
        <button className='btn btn-danger'
          onClick={this.handleDelete}
        >Delete</button>
        <button className='btn btn-warning'>Update</button>
      </div>
    )
  }
}

export default Quote;