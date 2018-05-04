import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Welcome from './Welcome'
import Topic from './Topic'
import Faq from './Faq'
import Example from './Example'
import SubmitQuestion from './SubmitQuestion'
import Search from './Search'


const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <Nav />
      <div id='content'>
        <Route exact path='/' component={Welcome} />
        <Route path='/topic/:topic' component={Topic} />
        <Route exact path='/examples' component={Faq} />
        <Route path='/examples/:id' component={Example} />
        <Route path='/submit' component={SubmitQuestion} />
        <Route path='/search' component={Search} />
      </div>
    </div>
  </Router>
)

export default App
