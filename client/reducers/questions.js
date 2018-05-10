function questions (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return [...action.questions]
    case 'CLEAR_QUESTIONS':
      return []
    default:
      return state
  }
}

export default questions
