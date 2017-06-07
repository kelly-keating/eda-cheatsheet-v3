import {combineReducers} from 'redux'

import greetings from './greetings'
import topics from './topics'

export default combineReducers({
  greetings,
  topics
})
