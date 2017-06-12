import React from 'react'
import {connect} from 'react-redux'


class Code extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      code: props.thisCode,
      id: props.id,
      isActive: false
    }
  }

  toggleActive () {
    this.setState({
      isActive: !this.state.isActive
    })
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
          <button className='codeButt' onClick={() => this.toggleActive()}>{this.state.code.text}</button>
        </div>
        {this.state.isActive && this.renderDescrip(this.state.code)}
      </div>
    )
  }

}

export default connect()(Code)
