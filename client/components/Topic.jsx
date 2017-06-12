import React from 'react'
import {connect} from 'react-redux'

import {getTopic} from '../actions/topics'
import {listCode} from '../actions/code'

import Code from './Code'


class Topic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.match.params.topic,
      topic: {},
      code: '',
      active: []
    }
  }

  ComponentDidMount () {
    this.props.dispatch(getTopic(this.state.name))
    this.props.dispatch(listCode(this.state.name))
  }

  ComponentWillReceiveProps () {

  }

  renderTitle (topic) {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{topic ? topic.description : 'loading...'}</h3>
      </div>
    )
  }

  renderList () {
    return (
      this.state.code.map((code) => {
         return <Code key={oneCode.code_id} id={oneCode.code_id} thisCode={oneCode} />
      })
    )
  }

  render () {
    return (
      <div>
        {this.renderTitle(this.state.topic)}
        {this.state.code && this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topic: state.topic,
    code: state.code
  }
}

export default connect(mapStateToProps)(Topic)
