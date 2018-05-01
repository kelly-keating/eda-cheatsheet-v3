function sections (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SECTIONS':
      console.log(action)
      return [...action.sections]
    case 'CLEAR_SECTIONS':
      return []
    default:
      return state
  }
}

export default sections
