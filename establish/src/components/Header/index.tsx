import React from 'react'

import {Left, Center, Right} from './Alignment'

export default ({left = null, center = null, right = null} = {}) => {
  return <header className='header navbar'>
    {left ? <Left>
      {left}
    </Left>: null}
    {center ? <Center>
      {center}
    </Center>
    : null}
    {right ? <Right>
      {right}
    </Right>
    : null}
  </header>
}
