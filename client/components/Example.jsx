import React from 'react'
import {connect} from 'react-redux'

import {getOneExample} from '../actions/examples'


class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      example: { description: "loading" },
      sections : [],
      code: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getOneExample(this.state.id));
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      example: nextProps.example,
      sections: nextProps.sections,
      code: nextProps.code
    })
  }

  renderSections (sections) {
    return (
      sections.map((section) => {
        var code = this.state.code.find((section) => section.example)
        return (
          <div>
            <p>{section.paragraph}</p>
            <p>CODE GOES HERE</p>
          </div>
      )}
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
    sections: state.sections,
    code: state.code
  }
}

export default connect (mapStateToProps)(Example)
