import React from 'react'

class SubmitQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
  }

  handleChange(evt) {
    this.setState({question: evt.target.value});
  }

  handleSubmit(evt){
    console.log(evt.target.value)
    evt.preventDefault()
  }

  render(){
    return (
      <div id='questionForm'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your question:
            <input type="text" value={this.state.question} onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" value="Click Me!" />
        </form>
      </div>
    )
  }
}

export default SubmitQuestion
