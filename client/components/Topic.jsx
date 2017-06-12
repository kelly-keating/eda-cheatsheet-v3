import React from 'react'
import {connect} from 'react-redux'

import {getTopic} from '../actions/topics'
import {listCode} from '../actions/code'

import Code from './Code'

const renderList = (code) => (
  code.map((oneCode) => {
     return <Code key={oneCode.code_id} id={oneCode.code_id} thisCode={oneCode} />
  })
)

const Topic = ({topic, code, match, dispatch}) => (
  <div>
    {dispatch(getTopic(match.params.name))}
    {dispatch(listCode(match.params.name))}
    <h1>{match.params.name}</h1>
    <h3>{topic ? topic.description : 'loading'}</h3>
    {code && renderList(code)}
  </div>
)


const mapStateToProps = (state) => {
  return {
    topic: state.topic,
    code: state.code
  }
}

export default connect(mapStateToProps)(Topic)
