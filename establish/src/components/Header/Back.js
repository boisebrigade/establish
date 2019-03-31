import React from 'react'
import { withRouter } from 'react-router'

const Back = ({history}) =>
  <div className='back h-100' onClick={history.goBack}>
    <img className='ml3' src='/assets/actions/back.svg' alt='Back' />
    <span>Back</span>
  </div>

export default withRouter(Back)
