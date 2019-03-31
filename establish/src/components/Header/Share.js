import React from 'react'

const Share = ({onShare}) =>
  <div className='header__item mr3 h-100 h-100 flex' onClick={onShare}>
    <img src='/assets/actions/share.svg' alt='Share' />
  </div>

export default Share
