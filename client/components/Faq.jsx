import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import {listExamples} from '../actions/examples'

class Faq extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      topics: [],
      examples: []
    }
  }

  componentDidMount () {
    this.props.dispatch(listExamples())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      topics: this.props.topics,
      examples: nextProps.examples
    })
  }

  renderQuestions (topicId) {
    if (this.props.examples){
      var onTopic = this.props.examples.filter((example) => {
        return example.topic_id === topicId
      })
      return (
        onTopic.map((example, i) => {
          return <div key={i}><Link to={`/examples/${example.id}`}>{example.question}</Link></div>
        })
      )
    }
  }

  render () {
    return (
      <div>
        {this.state.topics.map((topic, i) => {
          return (
            <div key={i} >
              <h3 key={topic.id}>{topic.name}</h3>
              {this.renderQuestions(topic.id)}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState2Props = (state) => {
  return {
    topics: state.topics,
    examples: state.examples
  }
}

export default connect(mapState2Props)(Faq)
