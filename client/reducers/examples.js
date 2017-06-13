function examples (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_EXAMPLES':
      return [...action.examples]
    case 'CLEAR_EXAMPLES':
      return []
    default:
      return state
  }
}

export default examples
