import React from 'react'

const Share = ({onShare}) =>
  <div className='h-100 flex ml-auto' onClick={onShare}>
    <img className='ml-auto mr3 h-100 w-100' src='/assets/actions/share.svg' alt='Share' />
  </div>

export default Share
