import {combineReducers} from 'redux'

import topics from './topics'
import topic from './topic'
import code from './code'

export default combineReducers({
  topics,
  topic,
  code
})
