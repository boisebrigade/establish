import React from 'react'
import { withRouter } from 'react-router'

const Back = ({history: history}) =>
  <div className='back' onClick={history.goBack}>
    <img className='ml-3' src='/icons/back.svg' />
    <span>Back</span>
  </div>

export default withRouter(Back)
