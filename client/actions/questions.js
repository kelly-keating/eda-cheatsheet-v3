import request from 'superagent'

export const receiveQuestions = (questions) => {
  return {
    type: 'RECEIVE_QUESTIONS',
    questions
  }
}

export const updateQuestion = (question) => {
  return {
    type: 'UPDATE_QUESTION',
    question
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

export function updateRating (dir, question){
  let newQ = {
    id: question.id,
    content: question.content,
    up_vote: question.up_vote + (dir == 'up' ? 1 : 0),
    down_vote: question.down_vote + (dir == 'down' ? 1 : 0)
  }
  return (dispatch) => {
    request
      .put(`/api/questions/one`)
      .send(newQ)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(updateQuestion(newQ))
      })
  }
}
