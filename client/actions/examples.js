import request from 'superagent'

export const receiveExamples = (examples) => {
  return {
    type: 'RECEIVE_EXAMPLES',
    examples
  }
}

export function listExamples () {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_EXAMPLES' })
    request
      .get(`/api/examples`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveExamples(res.body))
      })
  }
}
