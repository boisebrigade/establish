import React from 'react';

import Header from '../components/Header'
import Back from '../components/Header/Back'

import Footer from '../components/Footer'

export default class extends React.Component {
  render() {
    return (
      <>
        <Header
          left={<Back />}
        />
        <Footer />
      </>
    )
  }
}

