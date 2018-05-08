import React from 'react'
import {connect} from 'react-redux'

import Paragraph from './Paragraph'

import {getOneExample} from '../actions/examples'
import {clearCode} from '../actions/code'


class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      example: { description: "loading" },
      sections : []
    }
  }

  componentDidMount () {
    this.props.dispatch(getOneExample(this.state.id));
    this.props.dispatch(clearCode());
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      example: nextProps.example,
      sections: nextProps.sections
    })
  }

  renderSections (sections) {
    return (
      sections.map((section, i) => (
        <div key={i}>
          <Paragraph section={section} />
        </div>
      )
    )
  )}

  render () {
    return (
      <div>
        {this.state.example.description}
        {this.renderSections(this.state.sections)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    example: state.example,
    sections: state.sections
  }
}

export default connect (mapStateToProps)(Example)
