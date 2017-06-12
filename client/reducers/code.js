function code (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CODE':
      console.log(action.code)
      return [...action.code]
    case 'CLEAR_CODE':
      return []
    default:
      return state
  }
}

export default code
