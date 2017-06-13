import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Topic from './Topic'
import Faq from './Faq'



const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <Nav />
      <div id='content'>
        <Route path='/topic/:topic' component={Topic} />
        <Route path='/examples' component={Faq} />
      </div>
    </div>
  </Router>
)

export default App
