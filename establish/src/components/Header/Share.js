import React from 'react'

const Share = ({onShare}) =>
  <div className='mr3 h-100 h-100 flex' onClick={onShare}>
    <img className='ml3' src='/assets/actions/share.svg' alt='Share' />
  </div>

export default Share
