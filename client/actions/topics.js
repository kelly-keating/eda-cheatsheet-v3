import request from 'superagent'

export const receiveTopics = (topics) => {
  return {
    type: 'RECEIVE_TOPICS',
    topics
  }
}

export function getTopics () {
  return (dispatch) => {
    request
      .get(`/api/topics`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveTopics(res.body))
      })
  }
}
