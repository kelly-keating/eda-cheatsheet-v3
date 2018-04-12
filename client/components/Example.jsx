import React from 'react'
import {connect} from 'react-redux'


class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        hi
      </div>
    )
  }

}

export default connect ()(Example)
