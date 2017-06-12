import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'


const App = () => (
  <Router>
    <div className='app-container'>
      <Nav />
    </div>
  </Router>
)

export default App
