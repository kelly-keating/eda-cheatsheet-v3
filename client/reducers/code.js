function code (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CODE':
      console.log(action.code)
      return [...action.code]
    default:
      return state
  }
}

export default code
