function code (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CODE':
      return [...action.code]
    case 'APPEND_CODE':
      return [...state, ...action.code]
    case 'CLEAR_CODE':
      return []
    default:
      return state
  }
}

export default code
