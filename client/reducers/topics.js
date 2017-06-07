function topics (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TOPICS':
      return [...action.topics]
    default:
      return state
  }
}

export default topics
