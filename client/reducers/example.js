function example (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_A_EXAMPLE':
      return action.example
    default:
      return state
  }
}

export default example
