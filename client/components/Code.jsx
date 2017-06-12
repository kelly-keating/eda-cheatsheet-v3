import React from 'react'
import {connect} from 'react-redux'


class Code extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      code: props.thisCode,
      id: props.id
    }
  }

  renderDescrip (code) {
    return (
      <div className='codeDescribe'>{code.description}</div>
    )
  }

  render () {
    return (
      <div>
        <div className='codeSnippet'>
          <button className='codeButt' onClick={() => console.log('click')}>{this.state.code.text}</button>
        </div>
        {this.renderDescrip(this.state.code)}
      </div>
    )
  }

}

export default connect()(Code)
