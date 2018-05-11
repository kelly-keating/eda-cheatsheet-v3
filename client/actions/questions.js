import request from 'superagent'

export const receiveQuestions = (questions) => {
  return {
    type: 'RECEIVE_QUESTIONS',
    questions
  }
}

export function getAllQuestions () {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_QUESTIONS' })
    request
      .get(`/api/questions/all`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(res.body)
        dispatch(receiveQuestions(res.body))
      })
  }
}

export function addQuestion (question) {
  return (dispatch) => {
    request
      .post(`/api/questions`)
      .send({content: question})
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(getAllQuestions())
      })
  }
}
