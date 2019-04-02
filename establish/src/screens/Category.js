import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../components/Header'
import Back from '../components/Header/Back'
import Title from '../components/Header/Title'
import Footer from '../components/Footer'
import Share from '../components/Header/Share'

import Body from '../components/Body'

export default props => {
  const {
    match: {
      params: {categoryId, categoryName}
    },
    data,
  } = props

  const [{
    name,
    resources = [],
  }] = data.filter(category => category.id === categoryId)


  return (
    <>
      <Header
        left={<Back />}
        center={<Title>{name}</Title>}
        right={<Share/>}
      />
      <Body>
        <div className='listScreen mt3 mb3 flex flex-column'>
          {resources.map((resource, i ) => {
            return <Link key={i} to={`/resource/${categoryId}/${categoryName}/${resource.id}/${resource.title.replace(/ /g, '-')}}`}>
              <div className='resourceList'>
                <div className='resources pb3 mt3 pr4'>
                  {resource.title}
                </div>
              </div>
            </Link>
          })}
        </div>
      </Body>
      <Footer />
    </>
  )
}
