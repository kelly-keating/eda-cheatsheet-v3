import React from 'react'
import {connect} from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import {getTopics} from '../actions/topics'


const renderButton = (topic) => {
  return (
    <Link to={`/topic/${topic.alias}`} key={topic.id} >
      <div className='navButt' >
        {topic.name}
      </div>
    </Link>
  )
}

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: props.topics
    }
  }
  componentDidMount() {
    this.props.dispatch(getTopics())
  }
  componentWillReceiveProps(nextProps) {
    this.setState({topics: nextProps.topics})
  }
  render() {
    return (
      <div id='nav'>
        {this.state.topics.map(renderButton)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {topics: state.topics}
}

export default connect(mapStateToProps)(Nav)
