import React from 'react'
import {connect} from 'react-redux'

import QuestionList from './QuestionList'

import sendSlack from '../slackApi'
import {addQuestion} from '../actions/questions'

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
    // sendSlack(this.state.question)
    this.props.dispatch(addQuestion(this.state.question))
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

export default connect()(SubmitQuestion)
