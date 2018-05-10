import React from 'react'

import sendSlack from '../slackApi'

import QuestionList from './QuestionList'

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
    sendSlack(this.state.question)
  }

  render(){
    return (
      <div id='questionForm'>
        Your question:
        <input type="text" value={this.state.question} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Click Me!" onClick={this.handleSubmit.bind(this)} />
        <QuestionList />
      </div>
    )
  }
}

export default SubmitQuestion
