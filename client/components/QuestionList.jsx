import React from 'react'
import {connect} from 'react-redux'

import {getAllQuestions, updateRating} from '../actions/questions'

class QuestionList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    this.props.dispatch(getAllQuestions())
  }

  componentWillReceiveProps(newProps){
    this.setState({
      questions: newProps.questions
    })
  }

  renderQuestions(question, i){
    return (
      <div key={i} className='question'>
        {question.content} | {question.up_vote - question.down_vote}
        <div onClick={() => this.props.dispatch(updateRating('up', question))}> + </div>
        <div onClick={() => this.props.dispatch(updateRating('down', question))}> - </div>
      </div>
    )
  }

  render(){
    return (
      <div id='questionList'>
        <h1>QUESTIONS!</h1>
        {this.state.questions.sort((a, b) => a.up-a.down).map((question, i) => {
          return this.renderQuestions(question, i)
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(QuestionList)
