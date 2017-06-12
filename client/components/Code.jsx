import React from 'react'
import {connect} from 'react-redux'


const renderDescrip = (thisCode) => (
  <div className='codeDescribe'>{thisCode.description}</div>
)

const Code = ({id, thisCode, dispatch}) => (
  <div>
    <div className='codeSnippet'>
        <button className='codeButt' onClick={() => console.log('click')}>{thisCode.text}</button>
    </div>
     {renderDescrip(thisCode)}
  </div>
)

export default connect()(Code)
