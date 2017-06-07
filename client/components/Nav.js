import React from 'react'
import {connect} from 'react-redux'

import {getGreetings} from '../actions/greetings'
import {getTopics} from '../actions/topics'


import { HashRouter as Router, Link } from 'react-router-dom'


const renderButton = (topic) => {
  return (
    <div className='navButt' key={topic.id} ><Link to={`/topic/${topic.alias}`} >{topic.name}</Link></div>
  )
}

const Nav = ({topics, dispatch}) => (
  <div id='nav'>
    {dispatch(getTopics())}
    {topics.map(renderButton)}
  </div>
)

const mapStateToProps = (state) => {
  return {topics: state.topics}
}

export default connect(mapStateToProps)(Nav)
