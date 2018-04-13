import React from 'react'
import {connect} from 'react-redux'

import {getOneExample} from '../actions/examples'


class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      example: {
        description: "loading"
      }
    }
  }

  componentDidMount () {
    this.props.dispatch(getOneExample(this.state.id));
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      example: nextProps.example
    })
  }

  render() {
    return (
      <div>
        {this.state.example.description}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    example: state.example
  }
}

export default connect (mapStateToProps)(Example)
