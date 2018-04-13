import React from 'react'
import {connect} from 'react-redux'

import {getOneExample} from '../actions/examples'


class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      example: {}
    }
  }

  componentDidMount () {
    console.log("hi");
    this.props.dispatch(getOneExample(this.state.id));
  }

  componentWillReceiveProps (nextProps) {
    console.log("New!: " + nextProps.example);
    this.setState({
      example: nextProps.example
    })
  }

  render() {
    console.log("State: " + this.state)
    return (
      <div>
        hi
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
