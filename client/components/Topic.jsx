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
      code: [],
      active: []
    }
  }

  componentDidMount () {
    this.setState({
      topic: this.props.topics.filter((topic) => topic.alias === this.state.name)
    })
    this.props.dispatch(listCode(this.state.name))
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.match.params.topic != this.state.name) {
      this.props.dispatch(listCode(nextProps.match.params.topic))
      console.log("requesting code");
      this.setState({
        code: [],
        name: nextProps.match.params.topic,
        topic: nextProps.topics.find((topic) => topic.alias === nextProps.match.params.topic)
      })
    } else {
      console.log("setting codee");
      this.setState({
        code: nextProps.code,
      })
    }
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
         return <Code key={code.code_id} id={code.code_id} thisCode={code} />
      })
    )
  }

  render () {
    return (
      <div>
        {console.log('render ', this.props)}
        {this.renderTitle(this.state.topic)}
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    code: state.code
  }
}

export default connect(mapStateToProps)(Topic)
