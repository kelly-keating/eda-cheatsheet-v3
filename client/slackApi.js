var request = require('superagent')

export default function sendSlack (text) {
  // request
  //   .post('https://hooks.slack.com/services/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')
  //   .set({'Content-type': 'application/json'})
  //   .send({ text: 'Hello World!' })
  //   .end((err, res) => {
  //     if (err) {
  //       callback(err)
  //     } else {
  //       callback(null, res.body)
  //     }
  //   })
  request
    .post('/api/slack')
    .send({text})
    .end((err, res) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log(res.body)
      }
    })
}
