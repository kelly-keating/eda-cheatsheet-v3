import request from 'superagent'

export const receiveCode = (code) => {
  return {
    type: 'RECEIVE_CODE',
    code
  }
}

export function listCode (topic) {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_CODE' })
    request
      .get(`/api/code/${topic}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCode(res.body))
      })
  }
}