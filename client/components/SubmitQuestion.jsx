import React from 'react'

import sendSlack from '../slackApi'

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

  handleSubmit(){
    sendSlack(this.state.question,(err, body) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log(body)
      }
    })
  }

  render(){
    return (
      <div id='questionForm'>
        Your question:
        <input type="text" value={this.state.question} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Click Me!" onClick={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

export default SubmitQuestion
