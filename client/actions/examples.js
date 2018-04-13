import request from 'superagent'

export const receiveExamples = (examples) => {
  return {
    type: 'RECEIVE_EXAMPLES',
    examples
  }
}

export const receiveExample = (example) => {
  return {
    type: 'RECEIVE_A_EXAMPLE',
    example
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

export function getOneExample (id) {
  return (dispatch) => {
    request
      .get(`/api/examples/example/${id}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveExample(res.body))
      })
  }
}
