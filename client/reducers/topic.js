function topic (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_A_TOPIC':
      return action.topic
    default:
      return state
  }
}

export default topic
