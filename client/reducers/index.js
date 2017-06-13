import {combineReducers} from 'redux'

import topics from './topics'
import code from './code'
import examples from './examples'

export default combineReducers({
  topics,
  code,
  examples
})
