import React from 'react'
import { withRouter } from 'react-router'

const Back = ({history}) =>
  <div className='header__item back h-100' onClick={history.goBack}>
    <img src='/assets/actions/back.svg' alt='Back' />
    <span>Back</span>
  </div>

export default withRouter(Back)
