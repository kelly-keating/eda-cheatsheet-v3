import React from 'react'

import { connect } from 'react-redux'

import {getCodeForSections} from '../actions/code'

class Paragraph extends React.Component {
  constructor(props){
    super(props)
    this.section = props.section
    this.state = {
      code: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getCodeForSections(this.section.id))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      code: nextProps.code
    })
  }

  render() {
    return (
      <div id='paragraph'>
        <p>{this.section.paragraph}</p>
        {this.state.code.map((code) => {
          if(code.section_id == this.section.id){
            return <p key={code.id} >{code.text}</p>
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    code: state.code
  }
}

export default connect (mapStateToProps)(Paragraph)
