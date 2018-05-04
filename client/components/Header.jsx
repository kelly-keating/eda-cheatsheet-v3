import React from 'react'

const Header = () => {
  return (
    <div id='header'>
      <div className='headerButt' id='title'><a href='#'>eda cheatsheet</a></div>
      <div id='headerLinks'>
        <div className='headerButt'><a href='#/examples'>FAQ</a></div>
        <div className='headerButt'><a href='#/submit'>Suggestions</a></div>
        <div className='headerButt'><a href='#/search'>Search</a></div>
      </div>
    </div>
  )
}

export default Header
