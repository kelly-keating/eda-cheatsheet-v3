function questions (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return [...action.questions]
    case 'UPDATE_QUESTION':
      return state.map((question) => {
        return question.id == action.question.id ? action.question : question
      })
    case 'CLEAR_QUESTIONS':
      return []
    default:
      return state
  }
}

export default questions
