import {combineReducers} from 'redux'

import topics from './topics'
import topic from './topic'
import code from './code'
import examples from './examples'
import example from './example'
import sections from './sections'
import questions from './questions'


export default combineReducers({
  topics,
  topic,
  code,
  examples,
  example,
  sections,
  questions
})
