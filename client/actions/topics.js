import request from 'superagent'

export const receiveTopics = (topics) => {
  return {
    type: 'RECEIVE_TOPICS',
    topics
  }
}

export const receiveTopic = (topic) => {
  console.log('topic!')
  return {
    type: 'RECEIVE_A_TOPIC',
    topic
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

export function getTopic (name) {
  return (dispatch) => {
    request
      .get(`/api/topics/${name}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveTopic(res.body))
      })
  }
}
