
function getTopics (connection) {
  return connection('topics')
}

function getTopic (topic, connection) {
  return connection('topics')
  	.where('topics.name', topic)
  	.first()
}

function listCode (topic, connection) {
  return connection('code').select('*', 'code.id as id', 'code.description as description')
  	.join('topics', 'code.topic_id', '=', 'topics.id')
  	.where('topics.name', topic)
}

function getCode (id, connection) {
  return connection('code')
  	.where('code.id', id)
  	.first()
}

function getExamples (topic_id, connection) {
  return connection('examples')
    .where('examples.topic_id', topic_id)
}

function getSections (id, connection) {
  return connection('sections')
    .where('example_id', id)
}

function getCodeFromSection (id, connection) {
  return connection('code').select('*', 'code.id as id')
    .join('codeToSections', 'code.id','=','codeToSections.code_id')
    .where('codeToSections.section_id', id)
}

module.exports = {
  getTopics,
  getTopic,
  listCode,
  getCode,
  getExamples,
  getSections,
  getCodeFromSection
}
