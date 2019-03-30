import React from 'react'

export default props =>
  <div className='search'>
    <img src='icons/search.svg' className='searchIcon' alt='search'/>
    <input className='searchInput' placeholder='Search' onChange={props.handleChange}/>
  </div>
